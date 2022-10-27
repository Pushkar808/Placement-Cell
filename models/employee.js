const mongoose=require('mongoose');
const EmployeeSchema=mongoose.Schema({//structure for interview data db schema
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    emp_id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const Employee=mongoose.model('Employee',EmployeeSchema);//creating DB named as "Interview"
module.exports=Employee;