const autoBind = require("auto-bind");
const{validationResult}=require('express-validator');
const User = require('./../models/user');




module.exports=class{

constructor(){
autoBind(this);
this.User=User;
}


validationBody(re,res){
   const result= validationResult(req);
    if(!result.isEmpty()){
        const error=result.array();
        const message=[];
        error.forEach((err)=>message.push(err.msg));
        res.status(400).json({
            message:'vallidator err',
            data:message
        })
        return false;
       }
       return true;
};

validator(req,res,next){
    if(!this.validationBody(req,res)){
        return;
    }
    next();
};

response({res,message,code=200,data={}}){
    res.status(code).json({
        message,
        data
    });
}

};