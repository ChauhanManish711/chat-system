const router = require('express').Router();
const {getAllUsers} = require('../../controller');

router.get('/get-all-users', getAllUsers);

module.exports = router;