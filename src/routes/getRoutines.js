const express = require('express');
const UserRoutine = require('../Models/UserRoutine');
const router = express.Router();

router.post('/', (req, res) => {
    UserRoutine.findOne({username : req.body.username})
               .then(user => {
                   res.json(user.routines)
                })
               .catch(err => console.log(err));
})
    
module.exports = router;