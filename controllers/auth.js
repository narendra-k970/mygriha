const validator = require('validator')
const bcrypt = require('bcrypt')
const { t } = require('typy');
const jwt = require('jsonwebtoken');
const Users = require('../models/User');
const crypto = require('crypto');

const { generatePasswordHash } = require('../utils/auth');

const login = async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;
        if (!validator.isEmail(email)) {
            return res.status(403).send({ message: 'Invalid email' });
        }
        if (!t(password).safeObject) {
            return res.status(403).send({ message: 'Password is empty' });
        }

        const doc = await Users.findOne({ email })

        if (t(doc).isNullOrUndefined) {
            res.status(403).send({ message: 'Invalid username or password' });
        } else if (
            !t(doc.email).isNullOrUndefined
            && !t(doc.password).isNullOrUndefined
        ) {
            if (doc.status === 1) {
                const password_valid = bcrypt.compareSync(password, doc.password);
                if (password_valid) {
                    const jwt_token = jwt.sign(
                        {
                            id: doc._id,
                            name: doc.name,
                            email: doc.email,
                            role: doc.access_level,
                            phone: doc.phone,
                        },
                        process.env.JWT_SECRET,
                        { expiresIn: rememberMe ? '168h' : '12h' },
                    );
                    res.status(200).send({
                        message: 'Successfully signed in',
                        token: jwt_token,
                    });
                } else {
                    res.status(403).send({ message: 'Invalid username or password' });
                }
            } else {
                res.status(403).send({ message: 'This account is not active, Please contact us at hello@trustcheckr.com' });
            }
        }
    } catch (err) {
        console.log("error in login", err)
        res.status(500).send({
            message: err?.message
        })
    }
}

const signUp = async (req, res) => {
    try {
        const { name, email, phone, password, pincode, city, state, country } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(403).send({ message: 'Invalid email' });
        }
        if (!t(password).safeObject) {
            return res.status(403).send({ message: 'Password is empty' });
        }

        if (!name || !phone || !pincode || !city || !state || !country) {
            return res.status(403).send({ message: 'Missing Fields' });
        } else {
            const password_hash = await generatePasswordHash(password);

            const findEmail = await Users.findOne({ email })

            if (findEmail) {
                return res.status(200).send({ message: 'Email already registered' });
            } else {
                const data = {
                    name,
                    email,
                    phone,
                    password: password_hash,
                    pincode,
                    city,
                    state,
                    country
                }

                const saveUser = await new Users(data)
                saveUser.save()

                return res.status(200).send({ message: 'Sign Up Successful' });
            }
        }
    } catch (err) {
        console.log("error in signup", err)
        res.status(500).send({
            message: err?.message
        })
    }
}
const verifyToken = async (req, res) => {
    try {
        const token = !t(req.body.token).isNullOrUndefined ? req.body.token : false;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
                if (data) {
                    res.status(200).send({
                        email: data.email,
                        name: data.name,
                        role: data.role,
                        id: data.id,
                        phone: data.phone,
                        message: 'Token validation successful',
                    });
                } else {
                    res.status(403).send({ message: 'Invalid Token' });
                }
            });
        } else {
            res.status(403).send({ message: 'Invalid Token' });
        }
    } catch (err) {
        console.log("error in verify token", err)
        res.status(500).send({
            message: err?.message
        })
    }
}

const generatePassword = async (req, res) => {
    try {
        const password_hash = await generatePasswordHash(req.body.password)
        res.status(200).send({ 'hash': password_hash });
    } catch (err) {
        console.log("error in generate password", err)
        res.status(500).send({
            message: err?.message
        })
    }
}

const resetPassword = async (req, res) => {
    try {
        const oldPassword = !t(req.body.oldPassword).isNullOrUndefined
            ? req.body.oldPassword
            : false;
        const newPassword = !t(req.body.newPassword).isNullOrUndefined
            ? req.body.newPassword
            : false;
        const id = !t(req.body.id).isNullOrUndefined ? req.body.id : false;

        if (!id) {
            res.status(403).send({ message: 'client Id missing' });
        }

        if (!oldPassword || !newPassword) {
            res.status(403).send({ message: 'Missing fields' });
        }

        if (oldPassword && newPassword) {
            const doc = await Users.findOne({ _id: ObjectId(id) })
            if (!t(doc).isNullOrUndefined) {
                const isPasswordValid = bcrypt.compareSync(
                    oldPassword,
                    doc.password,
                );
                if (isPasswordValid) {
                    const password_hash = await generatePasswordHash(newPassword)
                    const updateUser = await Users.findOneAndUpdate(
                        { _id: ObjectId(id) },
                        {
                            password: password_hash,
                            updated_at: Date.now(),
                        },
                        { new: true },
                    )

                    if (updateUser) {
                        res
                            .status(200)
                            .send({ message: 'Password successfully updated' });
                    } else {
                        res.status(403).send({ message: 'Error updating password' })
                    }
                } else {
                    res
                        .status(403)
                        .send({ message: "Your current password doesn't match" });
                }
            } else {
                res.status(403).send({ message: "User Id doesn't exists" });
            }
        }
    } catch (err) {
        console.log("error in reset password", err)
        res.status(500).send({
            message: err?.message
        })
    }
}

const forgotPassword = async (req, res) => {
    try {
        // Send reset password link email to user
        const { email } = req.body;

        const user = await Users.findOne({ email: email });
        if (user) {

            // Reset Token Gen and add to database hashed (private) version of token
            const resetToken = user.getResetPasswordToken();

            await user.save();

            // create reset url to email the user
            const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}`;

            // define the transporter
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'divyanshusingh4755@gmail.com',
                    pass: 'hvxtnrhhsreawglx'
                }
            });

            // Define the email
            const mailOptions = (email) => ({
                from: 'Sender',
                to: user.email,
                subject: 'Forgot Password',
                text: resetUrl
            });

            // We send the email
            transporter.sendMail(mailOptions(email), async function (error, info) {
                if (error) {
                    user.reset_password_token = undefined;
                    user.reset_password_expire = undefined;

                    await user.save();

                    return res.status(403).send({ success: false, message: "Email could not be sent" });
                } else {
                    res.status(200).send({ success: true, data: "Email sent" });
                }
            });
        } else {
            return res.status(403).send({ success: false, message: "User doesn't exists" });
        }
    } catch (err) {
        console.log("error in reset password", err)
        res.status(500).send({
            message: err?.message
        })
    }
}

const resetPasswordToken = async (req, res) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    try {
        const user = await Users.findOne({
            reset_password_token: resetPasswordToken,
            reset_password_expire: { $gt: Date.now() }
        });

        if (user) {
            user.password = req.body.password;
            user.reset_password_token = undefined;
            user.reset_password_expire = undefined;
            user.updated_at = Date.now();

            await user.save();
            return res.status(201).send({
                success: true,
                message: 'Password Reset Success'
            });
        } else {
            return res.status(403).send({ success: false, message: "Token Expired" });
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    login,
    verifyToken,
    generatePassword,
    resetPassword,
    forgotPassword,
    resetPasswordToken,
    signUp
}