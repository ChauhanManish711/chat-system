const {Role,Permissions,rolePermissionModel} = require('../../models');
const {roles,permissions} = require('./seedData');
module.exports = async () => {

    for(let [key,role] of roles.entries()){
        let roleRecord = await Role.findOne({name : role.name});
        if(!roleRecord){
            roleRecord = await Role.create(role);
        }

        if(key == 0){
            //lets give permission to roles
            const allPermissions = await Permissions.find();
            for(let permission of allPermissions){
                  const rolePermission = {
                        roleId : roleRecord.id,
                        permissionId : permission.id
                  };
                  if(!await rolePermissionModel.findOne(rolePermission)){
                    await rolePermissionModel.create(rolePermission);
                  }
            }
        }

        if(key == 1){
            const permissionsCopy = structuredClone(permissions);
            const permission = await Permissions.findOne({name : permissionsCopy[0].name});
            const rolePermission = {
                roleId : roleRecord.id,
                permissionId : permission?.id
            }
            if(!await rolePermissionModel.findOne(rolePermission)){
                await rolePermissionModel.create(rolePermission);
            }
        }
    }
}