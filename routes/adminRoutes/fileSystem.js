const router = require('express').Router();
const {fileSystem} = require('../../controller');

router.post('/addUserData',fileSystem.addUserData);
router.get('/getUsersData',fileSystem.getUsersData);


module.exports = router;