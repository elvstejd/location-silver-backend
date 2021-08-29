const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const indexRouter = require('./api/routes/index');
const listingsRouter = require('./api/routes/listings');

mongoose.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true }).then(() => {
    console.log('Connected to db');
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

module.exports = app;
