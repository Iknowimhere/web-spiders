require("dotenv").config();
module.exports={
    MONGODB_LOCAL:process.env.MONGODB_LOCAL,
    PORT:process.env.PORT,
    MONGODB_CLOUD:process.env.MONGODB_CLOUD,
    NODE_ENV:process.env.NODE_ENV
}