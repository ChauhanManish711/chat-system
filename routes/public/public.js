const publicRouter = require('express').Router();
const {signUp,login} = require('../../controller');

publicRouter.post('/signup',signUp)
publicRouter.post('/login',login);

module.exports = publicRouter;