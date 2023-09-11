const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const logger = require('morgan');

const {personRouter} = require('./router/Person.router');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'DELETE', 'POST', 'UPDATE']
}))
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));


app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

app.use(personRouter);

module.exports = app;
