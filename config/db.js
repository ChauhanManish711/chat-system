const mongoose = require("mongoose");
const {userSeeder,roleSeeder,permissionSeeder} = require('./seeders');
const {getAllRoles} = require('../helpers');

mongoose.connect("mongodb://localhost:27017/fileSystem").then(async (res)=>{
    console.log('Successfully connected with Database');
    await permissionSeeder();
    await roleSeeder();
    await userSeeder();
    await getAllRoles();
    console.log('Data seed successfully');
}).catch((err)=>{
    console.log(`Database connectivity error : ${err}`);
});