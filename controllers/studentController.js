const studentSchema = require('../models/student')//student schema


//module to add student to DB
module.exports.addStudent = (req, res) => {
    //inserting data to student DB
    studentSchema.create({//get all data from query
        email: req.query.email,
        name:req.query.name,
        address: req.query.address,
        batch: req.query.batch,
        college: req.query.college,
        dsa_score: req.query.dsa_score,
        webd_score: req.query.webdscore,
        react_score: req.query.react_score
    }, (err, data)=>{
        if (err) {
            console.log("Some error occured while putting data for student: " + err);
            return;
        }
        res.redirect('back');
    });
}


module.exports.student=(req,res)=>{
    studentSchema.find({},(err,studentdata)=>{
        if (err) {
            console.log("Some error occured while fetching data for student: " + err);
            return;
        }
        console.log(studentdata);
    })
}