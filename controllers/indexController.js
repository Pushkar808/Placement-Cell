const studentSchema = require('../models/student');

module.exports.index = (req, res) => {
    studentSchema.find({}, (err, studentdata) => {
        if (err) {
            console.log("Some error occured while fetching data for student: " + err);
            return;
        }
        res.render('index', {
            studentData: studentdata
        })
    })
}
