const express=require('express');
const multer=require('multer');
const {storage}=require("../middlewares/multer");
const {createCourseController,fetchAll,fetchOne,updateCourse,deleteOne}=require('../controllers/courseController');
// console.log(createCourseController);
let upload=multer({storage:storage})
const router=express.Router();
router.post("/create-course",upload.any(['course_image','course_video']),createCourseController);
router.get("/fetch-All",fetchAll)
router.get("/fetch-One/:id",fetchOne)
router.put("/updateCourse/:body",upload.any(['course_image','course_video']),updateCourse);
router.delete("/deleteOne/:id",deleteOne)
module.exports=router;