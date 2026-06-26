const fileSystem = require('./fileController');
const publicController = require('./PublicController');
const userController = require('./usersController');

module.exports = {fileSystem,...publicController,...userController}