const Joi = require('joi');
const mongoose = require('mongoose');

const question = new mongoose.model('Question', new mongoose.Schema({
    createdDateTime: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        required:true,
        minlength:5,
        maxlength: 500
    },
    difficulty : {
        type: String,
        required:true,
        minlength: 1,
        maxlength: 20
    },
    description : {
        type: String,
        required:true,
        minlength:50,
        maxlength:3000
    },
    categories : {
        type: Array,
        required:true,
        minlength:1,
        maxlength:200
    },
    question_link: {
        type: String,
        required:true,
        minlength:10,
        maxlength:200,
    },
    solution_link: {
        type: String,
        required:true,
        minlength:10,
        maxlength:200
    }
}))

const validateQuestion = (question) => {
    const schema = Joi.object({
        title:Joi.string().min(5).max(500).required(),
        difficulty: Joi.string().min(1).max(20).required(),
        description:Joi.string().min(50).max(3000).required(),
        categories:Joi.array().min(1).max(200).required(),
        question_link:Joi.string().min(10).max(200).required(),
        solution_link:Joi.string().min(10).max(200).required(),
    });

    return schema.validate(question);
}

exports.Question = question;
exports.validate = validateQuestion;