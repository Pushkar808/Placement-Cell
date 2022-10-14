const express=require('express');
const router=new express.Router();
const student_controller=require('../controllers/studentController');
console.log("StdRoute")
router.use('/',student_controller.student);
student_controller.student;


module.exports=router;