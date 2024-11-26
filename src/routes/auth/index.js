const express = require('express');
const router=express.Router();
const controller=require('./controller');
const validator=require('./validator');

router.post(
    '/register',
    validator.registerValidator(),
    controller.register,
);

router.post(
    '/login',
    validator.loginValidator(),
    controller.login,
);


module.exports=router;