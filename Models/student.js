
//i. Student Name : Text
// ii. Student ID : Text
// iii. Course : Dropdown (Dropdown values : React JS, Node JS, Mongo DB, PostgreSQL, MySQL, SQLite)
// iv. Fees : Numeric
// v. Couse Start : Date Time
// vi. Course End : Date Time


const mongoose = require('mongoose');

const Studentschema= new mongoose.Schema({
        Sname:{
            type:String
        },

        Sid:{
            type:String
        },

        Cource:{
            type:String
        },

        Fees:{
            type:Number
        },

        Startdate:{
            type:Date
        },

        Enddate:{
            type:Date
        },

}) 

const Student = mongoose.model('Student',Studentschema)
module.exports =Student;