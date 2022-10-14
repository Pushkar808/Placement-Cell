const express=require('express');
const router=new express.Router();
const student_controller=require('../controllers/studentController');
console.log("AT ROUTES")

router.use('/add-student',student_controller.addStudent);

module.exports=router;