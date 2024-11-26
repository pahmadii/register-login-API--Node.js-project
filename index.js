const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`listening on port ${port}`));