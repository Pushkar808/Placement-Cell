const mongoose = require('mongoose');
const resultSchema = mongoose.Schema({//structure for student db schema
    student_id: {
        type: String,
        ref: 'Student',
        required: true
    },
    interview_id: {
        type: String,
        ref: 'Interview',
        required: true
    },
    result: {
        type: String,
        required: true
    }
});
const Result = mongoose.model('Result', resultSchema);//creating DB named as "Result"
module.exports = Result;