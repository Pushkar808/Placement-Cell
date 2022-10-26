const mongoose = require('mongoose');
const resultSchema = mongoose.Schema({//structure for student db schema
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    interview_id: {
        type: mongoose.Schema.Types.ObjectId,
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