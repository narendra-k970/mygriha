const express = require("express")
const cors = require("cors")
const cookieSession = require('cookie-session')
const mongoose = require('mongoose');

const app = express()

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cookieSession({
        name: 'mygirah-cookie',
        secret: 'COOKIE_SECRET',
        httpOnly: true
    })
)

const dbConfig = require("./config/dbConfig");

const connectionString = `mongodb+srv://${dbConfig.HOST}:${dbConfig.PORT}@${dbConfig.url}.mongodb.net/${dbConfig.DB}`;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Up and running"
    })
})

app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    mongoose.connection.on('connected', () => {
        console.log(`MongoDB up & running on ${connectionString} \n`);
        console.log(`Server is up and running on ${PORT}\n`);
    });

    mongoose.connection.on('error', (err) => {
        console.log(`MongoDB Error: - ${err}`);
        process.exit(1);
    });
});