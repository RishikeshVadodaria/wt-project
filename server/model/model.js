// const mongoose = require('mongoose');

// var schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true
//     },
//     gender : String,
//     status : String
// })

// const Userdb = mongoose.model('userdb', schema);

// module.exports = Userdb;

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    contact : {
        type: Number,
        required: true,
        unique: true
    },
    location : {
        type: String,
        required: true
    },
    education : {
        type: String,
        required: true
    },
    experience  : {
        type: String,
        required: true
    },
       
    skills : {
        type: String,
        required: true
    },
    languages : {
        type: String,
        required: true
    },
    achievements : {
        type: String,
        required: true
    }, 
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;