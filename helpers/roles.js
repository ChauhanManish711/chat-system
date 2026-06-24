const {Role} = require('../models');

let allRolesData = [];
const getAllRoles = async () => {
    allRolesData = await Role.find({});
}
const getRole = (roleName) => {
    return allRolesData.find(role => role.name == roleName)
}
const allRoles = {admin : 'Admin', user : 'User' }

module.exports = {getAllRoles,getRole,allRoles};