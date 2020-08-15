const express = require('express');
const UserRoutine = require('../Models/UserRoutine');
const router = express.Router();

router.put('/', (req, res) => {
    UserRoutine.updateOne(
        {username : req.body.username}, 
        {$pull : {routines : {_id : req.body._id}}}
    ).then(() => res.json({deleted : true}))
    .catch((err) => console.log(err));
})
    
module.exports = router;