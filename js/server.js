require('dotenv').config();

const userSc = require('./user.js')

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');

    const user = {
        email: 'test@123.com',
        text: 'hi'
    }

    new userSc(user).save();

}).catch((err) => {
    console.error('Failed to connect to MongoDB');
});


app.listen(3000, () => console.log('서버 시작'));

app.get('/', (req, res) => res.sendFile(__filename + '/formst.html'));