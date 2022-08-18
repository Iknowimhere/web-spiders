const{model,Schema}=require('mongoose');
const CourseSchema=new Schema({
    course_name:{
        type:String,
        required:[true,"course name is required"]
    },
    course_id:{
        type:String,
        required:[true,"course id is required"]
    },
    course_language:{
        type:String,
        required:[true,"course language is required"]
    },
    course_trainer:{
        type:String,
        required:[true,"course trainer is required"]
    },
    course_duration:{
        type:String,
        // required:[true,"course duration is required"]
    },
    course_category:{ type:String,
        // enum:["web development","java development","python development","fullstack development","backend development","ui development","automation testing"],
    },
    course_date:{ 
        type:String,
        required:[true,"date is required"],
    },
    course_image:{ 
        type:[""],
        required:[true,"course image is required"],
    default:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    },
    course_video:{
        type:[""]
    },
    course_branch:{
        type:String,
        // enum:["Basavangudi","Rajajinagar","BTM","old airport road","hebbal","kolkata"]
    },
    course_timings:{
        type:String,
        required:[true,"course timings is required"],
    },
    course_subjects:{
        type:String,
        // enum:["java","javascript","python","css","html","node.js"]
    },
    course_description:{
        type:String,
        required:[true,"course description is required"],
    },
},
{timestamps:true}
 )
 module.exports=model("courses",CourseSchema);