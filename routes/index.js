const express=require('express')
const router=express.Router();
const index_controller=require('../controllers/indexController');
router.use('/',index_controller.index);


module.exports=router;