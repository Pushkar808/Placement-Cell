const interviewSchema = require('../models/interview')

module.exports.addInterview = (req, res) => {
    interviewSchema.create({//get all data from body as method is post
        title: req.body.title,
        date: req.body.date,
        description: req.body.description,
        student_mapped: req.body.student_list
    }, (err, data) => {
        if (err) {
            console.log("Some error occured while putting data for student: " + err);
            return;
        }
        res.render('index');//so that the whole page will be refreshed
    });
}