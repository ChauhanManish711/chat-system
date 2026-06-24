const fileSystem = require('./fileController');
const publicController = require('./PublicController');

module.exports = {fileSystem,...publicController}