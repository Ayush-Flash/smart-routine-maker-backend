const express = require('express');
const UserRoutine = require('../Models/UserRoutine');
const { ObjectID } = require('mongodb');
const router = express.Router();

router.put('/', (req, res) => {
    const _id = new ObjectID();
    const todosObj = {_id: _id, todo : req.body.todo, isCompleted : req.body.isCompleted};
    UserRoutine.updateOne(
                    {username : req.body.username},
                    {   
                        $push : {
                            "routines.$[elem].todos": todosObj
                        },
                    },
                    {arrayFilters: [{"elem._id": req.body._id}]}
                )
               .then((doc) => {
                   res.json({inserted : true, _id : _id});  
               }).catch(err => console.log(err));
})
    
module.exports = router;