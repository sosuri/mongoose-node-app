const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

app.use(bodyParser.json());
app.use('/', require('./routes'));

app.listen(3000, ()=> {
    console.log('App is listening on port 3000');
});

