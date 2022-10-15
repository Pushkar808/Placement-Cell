const studentSchema = require('../models/student')//student schema
const ResultSchema = require('../models/results');//result schema

//module to add student to DB
module.exports.addStudent = (req, res) => {
    //inserting data to student DB
    studentSchema.create({//get all data from query
        email: req.query.email,
        name: req.query.name,
        address: req.query.address,
        batch: req.query.batch,
        college: req.query.college,
        dsa_score: req.query.dsa_score,
        webd_score: req.query.webdscore,
        react_score: req.query.react_score
    }, (err, data) => {
        if (err) {
            console.log("Some error occured while putting data for student: " + err);
            return;
        }
        res.redirect('back');
    });
}


module.exports.result = (req, res) => {
    //first finding if data is already there or not 
    //to differntiate between new data and old data

    const filter = { student_id: req.query.sid, interview_id: req.query.jid };
    const update = { result:req.body.result};
    //upsert means that if there is no matching data then make if it is then update it 
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    //if matching data of filter found then update it else create it
    ResultSchema.findOneAndUpdate(filter,update,options, (err, data) => {
        if (err)
            console.log(err);
        res.redirect('back')
    })

}