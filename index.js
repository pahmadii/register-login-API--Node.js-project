
const express = require('express');
const router=require('./src/routes/index');
const connectDB=require('./db/connect');

const app = express();

require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

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