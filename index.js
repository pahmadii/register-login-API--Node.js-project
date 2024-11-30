const express = require('express');
const app = express();
const connectDB=require('./db/connect');
const router=require('./src/routes/index');
require('dotenv').config();



require('./startup/login')();
require('./startup/config')(app,express);



app.use('/api',router);

const port=process.env.PORT || 5000;
const start=async()=>{
try{
await connectDB(process.env.MONGO_URI)
app.listen(port,()=>{console.log(`listening on port ${port}....`)});
} catch(error){
console.log(error)
}
}
start();