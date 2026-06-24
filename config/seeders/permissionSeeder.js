const {Permissions} = require('../../models');
const {permissions} = require('./seedData');

const permissionSeeder = async () => {
    try{
        for(let permission of permissions){
            const checkPermissionExistence = await Permissions.findOne({name : permission.name});
            if(!checkPermissionExistence){
                await Permissions.create(permission);
            }
        }
    }catch(err){
        console.log('Error during seeding permissions',err);
    }
}

module.exports = permissionSeeder;