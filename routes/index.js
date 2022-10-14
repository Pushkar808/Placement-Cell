const express=require('express')
const router=express.Router();
const index_controller=require('../controllers/indexController');

router.use('/interview',require('./interview'));
//redirect request of /student to ./student.js
router.use('/student',require('./student'));
router.use('/',index_controller.index);


module.exports=router;