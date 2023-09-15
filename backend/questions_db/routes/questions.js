const { Question, validate } = require('../models/question');
const express = require('express');

const router = express.Router();

// for getting the question bank, to be loaded to the FE
// missing auth middleware, needs jwt verification
router.get('/', async (req, res) => {
    console.log("GET route hit");
    const questions = await Question.find().sort("title");
    res.send(questions);
});

// TODO: only allow admin to edit questions
// might be better to use PATCH request because unlike PUT, PATCH only changes a certain field, whereas PUT
// updates the whole object
router.put('/:title', async (req, res) => {
    const titleToUpdate = req.params.title;
    const updatedQuestionData = req.body;

    try {
        const updatedQuestion = await Question.findOneAndUpdate(
            { title: titleToUpdate },
            updatedQuestionData,
            { new: true }
        );

        if (!updatedQuestion) {
            return res.status(404).send('Question not found');
        }

        res.send(updatedQuestion);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// TODO: only allow admin to add new questions
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let question = new Question({
        title: req.body.title,
        description: req.body.description,
        difficulty: req.body.difficulty,
        categories: req.body.categories,
        question_link: req.body.question_link,
        solution_link: req.body.solution_link  
    })

    question = await question.save();

    res.send(question);
});

// TODO: only allow admin to delete questions
router.delete('/:title', async (req, res) => {
    // incoming body will have the following properties
    // since every question is unique, find that question and delete it
    const title = req.params.title;
    const question = await Question.findOneAndRemove({ title });

    if (!question) {
        return res.status(404).send('Question was not found, and cannot be deleted');
    }

    res.send(question);
});


module.exports = router