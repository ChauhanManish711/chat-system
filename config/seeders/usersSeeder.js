const {User,Role,UserRoles} = require('../../models');
const {users,roles} = require('./seedData');
module.exports = async() => {
    for(let [key,user] of users.entries()){
        let userRecord = await User.findOne({email : user.email});
        if(!userRecord){
            userRecord = await User.create(user);
        }
        
        //lets suppose we inject one user per role
        const roleRecord = await Role.findOne({name : roles[key].name});
        const userRole = {
            userId : userRecord.id,
            roleId : roleRecord.id
        }
        if(!await UserRoles.findOne(userRole)){
            await UserRoles.create(userRole);
        }
    }
}