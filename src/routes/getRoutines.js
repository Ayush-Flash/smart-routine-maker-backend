const express = require('express');
const UserRoutine = require('../Models/UserRoutine');
const router = express.Router();

router.post('/', (req, res) => {
    UserRoutine.findOne({username : req.body.username})
               .then(user => {
                   if(user) {
                       res.json(user.routines)
                   } else {
                       res.json(null)
                   }
                })
               .catch(err => console.log(err));
})
    
module.exports = router;