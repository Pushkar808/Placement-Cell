const interviewSchema = require('../models/interview')
const ResultSchema = require('../models/results')
module.exports.addInterview = async (req, res) => {

    const student_list = req.body.student_list;
    const interviewData = await interviewSchema.create({//get all data from body as method is post
        title: req.body.title,
        date: req.body.date,
        description: req.body.description,
        student_mapped: student_list
    });
    if (interviewData) { 
        //if we have interview data the initially we can set result of all student to hold
        for (let i=0;i<student_list.length;i++) {
            await ResultSchema.create({
                interview_id:interviewData.id,
                student_id:student_list[i],
                result:"On hold"//setting intially data to hold
            });
        }
        return res.redirect('back');
    }
}

module.exports.showInterview = async (req, res) => {//show the interview and result data to the user
    const interview_data = await interviewSchema.findById(req.query.number).populate('student_mapped');
    ResultSchema.find({ interview_id:req.query.number }, (err, data) => {
        // console.log(data);
        res.render('interview_explore', {
            data: interview_data,//sending interview schema data
            result: data //sending result
        })
    })

}