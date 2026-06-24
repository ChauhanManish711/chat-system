const mongoose = require('mongoose');
const permissionSchema = new mongoose.Schema({
        name : {
            type : String,
            require : true
        },
        description : {
            type : String, 
            require :  true
        } 
});
const Permission = new mongoose.model('permissions',permissionSchema);
module.exports = Permission;