require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRouter = require('./api/routes/index');
const listingsRouter = require('./api/routes/listings');
const usersRouter = require('./api/routes/users');

mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@cluster0.vblpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to db');
}).catch(err => {
    console.log('Error de conexion', err);
});
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/listings', listingsRouter);
app.use('/users', usersRouter);

module.exports = app;
