const express = require('express');
const UserRoutine = require('../Models/UserRoutine');
const { ObjectID } = require('mongodb');
const router = express.Router();

router.put('/', (req, res) => {
    const _id = new ObjectID();
    const routinesObj = {_id: _id, name : req.body.name, todos : req.body.todos};
    UserRoutine.findOneAndUpdate(
                    {username : req.body.username},
                    {$push : {routines : routinesObj}},{
                        new: true
                    }
                )
               .then(() => {
                   res.json({inserted : true, _id : _id});  
               }).catch(err => console.log(err));
})
    
module.exports = router;