const studentSchema = require('../models/student');
const interviewSchema=require('../models/interview');
const e = require('express');
module.exports.index = (req, res) => {
    studentSchema.find({}, (err, studentdata) => {
        if (err) {
            console.log("Some error occured while fetching data for student: " + err);
            return;
        }
        else{
            interviewSchema.find({}).populate('student_mapped').exec((err, interviewdata) => {
                if (err) {
                    console.log("Some error occured while fetching data for interview: " + err);
                    return;
                }
                res.render('index', {
                    studentData: studentdata,
                    interviewData:interviewdata
                })
            });
        }
       
    })
}
