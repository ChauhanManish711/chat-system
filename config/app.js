require('./db');  //connect with DB

const express = require('express');
const app = express();

const path = require('path');
const {adminRoutes,publicRoutes,userRoutes} = require('../routes');

app.use(express.json()); //parse JSON string to object
app.use(express.urlencoded({ extended: true }));
app.use('/file',express.static(path.resolve('./public/files')));

//Routing
app.get('/', (req,res)=> res.send('Server is Running'));
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);
app.use('/public',publicRoutes);

//requested route not found
app.use((req,res)=>{
    res.status(404).send('Not Found');
})

module.exports = app;