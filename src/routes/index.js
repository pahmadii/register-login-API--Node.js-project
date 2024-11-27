const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const adminRouter = require('./admin');
const {isLoggined,isAdmin} = require('./../middleware/auth');
const error = require('./../middleware/error');

router.use('/auth', authRouter);

router.use('/user', isLoggined, userRouter);
router.use('/admin', isLoggined, isAdmin, adminRouter);


router.use(error);


module.exports = router;
