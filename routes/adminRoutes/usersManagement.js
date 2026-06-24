const router = require('express').Router();

router.get('/getUsers', (req,res)=>{
    res.json({message : 'Done'});
})

module.exports = router;