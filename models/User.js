const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  pincode: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  reset_password_token: {
    type: String,
    select: false
  },
  reset_password_expire: {
    type: String,
    select: false
  }
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.reset_password_token = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.reset_password_expire = Date.now() + 10 * (60 * 1000);
  this.updated_at = Date.now();

  return resetToken;
}

const User = mongoose.model('users', UserSchema);
module.exports = User;