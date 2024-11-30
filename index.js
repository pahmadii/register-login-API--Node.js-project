require('express-async-errors');
const express = require('express');
const app = express();

const router=require('./src/routes/index');
const connectDB=require('./db/connect');
const winston=require('winston');


require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));






process.on('uncaughtException',(ex)=>{
 console.log('uncaught exception');
 winston.error(ex.message,ex);
 
})
winston.add(new winston.transports.File({filename: 'logfile.log'}));

const p=Promise.reject(new Error('sth faild outside promis'));
p.then(()=>console.log('done'))

throw new Error('sth faild');




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