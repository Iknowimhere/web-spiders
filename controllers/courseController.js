const courseSchema=require('../models/courseModel');
const ErrorRespone = require('../utils/ErrorResponse');

/*-------access priavte
http verbs post
url --- /api/course/create-course*/

exports.createCourseController= async (req,res,next)=>{
try {
 let course_image=req.files[0]
 let course_video=req.files[1]
    let payload={...req.body,course_image,course_video};
    await new courseSchema(payload).save();
    res.status(201).json({success:true,message:"sucessfully created"})
} catch (err) {
    console.log(err);
    next(new ErrorRespone("INTERNAL SERVER ERROR",500))
}
};


/*-------access public
http verbs get
url --- /api/course/fetch-All*/

exports.fetchAll= async(req,res,next)=>{
    let courseData=await courseSchema.find({}) 
    res.status(200).json({success:true,courseData})

}

/*-------access public
http verbs get
url --- /api/course/fetch-one*/

exports.fetchOne= async(req,res,next)=>{
    let courseData=await courseSchema.findOne({course_id:req.params.id}) 
    res.status(200).json({success:true,courseData})
}

/*-------access private
http verbs put
url --- /api/course/Update*/

exports.updateCourse= async (req,res,next)=>{
    let course_image=req.files[0]
     let course_video=req.files[1]
     
        let payload={...req.body,course_image,course_video};
        // console.log(body);
        let updateData=await courseSchema.updateOne({course_id:req.params.body},{$set:payload})
        res.status(201).json({success:true,message:"successfully updated",updateData})
    };


    
/*-------access private
http verbs put
url --- /api/course/delete*/

    exports.deleteOne= async(req,res,next)=>{
        let courseData=await courseSchema.deleteOne({course_id:req.params.id}) 
        res.status(200).json({success:true,courseData})
    }