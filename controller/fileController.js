const path = require('path');
const {appendFile} = require('fs');
const { readFile } = require('fs/promises');
const userFilePath = path.resolve('./public/files/users.txt');

const addUserData = async (req,res) => {
    try{
        const {name,age} = req.body;
        appendFile(userFilePath,`name : ${name}, age : ${age}`,(err)=>{
            if(err){
                return console.log(err);
            }
            console.log('Successfully stored');
        });
        return res.json({message : 'Success'});
    }catch(err){
        return res.status(500).json({error : 'Something went wrong'});
    }
}

const getUsersData = async (req,res) => {
    try{
        const usersData = await readFile(userFilePath,'utf8');
        return res.json({data : usersData});
    }catch(err){
        return res.status(500).json({error : 'Something went wrong'});
    }
}


module.exports = {addUserData,getUsersData}