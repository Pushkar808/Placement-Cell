const express=require('express');
const router=new express.Router();
const interview_controller=require('../controllers/interviewController');
router.use('/add-interview',interview_controller.addInterview);



module.exports=router;