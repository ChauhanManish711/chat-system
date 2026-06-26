const {User,Role,UserRoles} = require('../models');
const bcrypt = require('bcryptjs');
const {getRole,allRoles,sendMail} = require('../helpers')
const jwt = require('jsonwebtoken');

module.exports.signUp = async (req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body;
        if(!firstName || !lastName || !email || !password) 
        return res.status(400).send({message : 'Missing data'});

        const existence = await User.findOne({email});
        if(existence) return res.status(400).send({message : 'Already found'});

        const saltRounds = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password,saltRounds);
        const user = await User.create({firstName,lastName,email,password:hasedPassword});
        
        //assign Role
        const role = getRole(allRoles.user);
        await UserRoles.create({userId : user.id, roleId : role.id})
        sendMail(user.email,'Registered Successfully','Welcome to Our application.')

        return res.send({message : 'Successfully Created'});

    }catch(err){
        console.log(err);
        return res.status(500).send({err : err});
    }
}

module.exports.login = async (req,res)=>{
        try{
            const {email, password} = req.body;
            if(!email || !password)
                return res.status(400).send({message : 'Missing required data'}); 

            const user = await User.findOne({email : email}).populate({path : 'roles', populate : {path : 'roleId'}});
            if(!user) 
                return res.status(400).send({message : 'Wrong credentials'}); 

            const autheticatedUser = await bcrypt.compare(password,user.password);
            if(!autheticatedUser) 
                return res.status(400).send({message : 'Wrong credentials'}); 
            
            const token = jwt.sign({user : user},process.env.JWT_TOKEN_KEY,{expiresIn : process.env.JWT_TOKEN_EXPIRATION})

            return res.json({token:token});
        }catch(err){
            console.log(err)
            return res.status(500).send({err:err.stack || err})
        }
}