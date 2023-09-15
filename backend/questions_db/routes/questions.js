const { Question, validate } = require('../models/question');
const express = require('express');

const router = express.Router();

// for getting the question bank, to be loaded to the FE
// missing auth middleware
router.get('/', async (req, res) => {
    const questions = await Question.find().sort("title");
    res.send(questions);
});

// for adding a new question
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let question = new Question({
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories,
        question_link: req.body.question_link,
        solution_link: req.body.solution_link  
    })

    question = await question.save();

    res.send(question);
});