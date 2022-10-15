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
        res.redirect('back');
    });
}

module.exports.showInterview=(req,res)=>{
    interviewSchema.findById(req.query.number).populate('student_mapped').exec((err,data)=>{
        console.log(data);
        res.render('interview_explore',{
            data:data
        })
    })
}