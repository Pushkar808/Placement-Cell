const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({//structure for student db schema
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    dsa_score:{
        type:Number,
        required:true
    },
    webd_score:{
        type:Number,
        required:true
    },
    react_score:{
        type:Number,
        required:true
    }
});
const Student=mongoose.model('Student',StudentSchema);//creating DB named as "Student"
module.exports=Student;