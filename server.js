const express =require('express');
const morgon=require('morgan');
const courseRoute=require('./routes/courseRoute');
const Errorhandler=require('./middlewares/ErrorHandler');
const {success,error,info}=require('consola');
const conncectDB=require('./config/db')
const {PORT,NODE_ENV}=require('./config');
const multer = require('multer');
let app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

let startServer =async()=>{
    try {
        conncectDB();
        if(NODE_ENV==='development'){
            app.use(morgon('dev'));
        }
          app.use("/api/course",courseRoute)
          //multer middleware 
        //   app.use(multer) 
       
        //error handling middleware
        app.use(Errorhandler);
        app.listen(PORT,err=>{
            if (err) throw err;
            info(`web spider app is running on ${PORT}`)
        })
    } catch (err) {
        error(err);
    }
}
startServer();