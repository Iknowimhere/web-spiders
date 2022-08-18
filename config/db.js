const {connect}=require('mongoose');
const {success,error,info}=require('consola');
const {MONGODB_CLOUD,MONGODB_LOCAL,NODE_ENV}=require("../config/index");

let conncectDB =async()=>{
    try {
        if (NODE_ENV ==="development"){
            await connect(MONGODB_LOCAL);
            success("local database connected")
        }else{
            await connect (MONGODB_CLOUD)
            success("cloud database connected")
        }
        
    } catch (err) {
        error(err);
    }
}

module.exports=conncectDB;