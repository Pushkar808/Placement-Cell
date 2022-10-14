const mongoose=require('mongoose');
const InterviewSchema=mongoose.Schema({//structure for interview data db schema
    title:{//title for interview
        type:String,
        required:true
    },
    date:{//interview date
        type:String,
        required:true
    },
    description:{
        type:String
    },
    student_mapped:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]
});
const Interview=mongoose.model('Interview',InterviewSchema);//creating DB named as "Interview"
module.exports=Interview;