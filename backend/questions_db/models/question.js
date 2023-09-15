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
    description : {
        type: String,
        required:true,
        minlength:50,
        maxlength:1000
    },
    
}))