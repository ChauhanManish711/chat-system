const {User} = require('../models');

const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find();
        return res.send({users});
    }catch(err){
        return res.status(500).send({error : err});
    }
}

module.exports = {getAllUsers}