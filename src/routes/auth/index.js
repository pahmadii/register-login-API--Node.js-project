const express = require('express');
const router=express.Router();
const controller=require('./controller');
const validator=require('./validator');

router.post(
    '/register',
    validator.registerValidator(),
    controller.validator,
    controller.register,
);

router.post(
    '/login',
    validator.loginValidator(),
    controller.validator,
    controller.login,
);


module.exports=router;