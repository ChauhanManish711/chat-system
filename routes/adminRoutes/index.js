const router = require('express').Router();

const userManagement = require('./usersManagement');
const chatManagement = require('./chatManagement');

//Add admin authorization here : Check upcoming request must have any module permission

router.use('/users',userManagement);
router.use('/chat-system',chatManagement)

module.exports = router;