const express = require('express');
const router = express.Router();

const {Todo} = require('../models/todo');
router.post('/', (req, res, next) => {
    console.log('request received...');
    console.log('text', req.body.text);
    const todo = new Todo({
        text: req.body.text
    });
    console.log(todo);
    todo.save().then((doc) => {
        console.log('saved in db...');
        res.status(201).send(doc);
    }, (e) => {
        console.log('error encountered...');
        return res.status(400).send(e);
    });
});

module.exports = router;

