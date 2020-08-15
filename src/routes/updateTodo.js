const express = require('express');
const UserRoutine = require('../Models/UserRoutine');

const router = express.Router();

router.put('/', (req, res) => {
    UserRoutine.updateOne(
        {username : req.body.username},
        {
            "routines.$[elem1].todos.$[elem2].isCompleted" : req.body.isCompleted   
        },
        {arrayFilters : [{"elem1._id" : req.body.routine_id}, {"elem2._id" : req.body.todo_id}]}
    )
    .then(doc => {
        ({n, nModified} = doc);
        (n > 0 && nModified > 0) ? res.json({updated : true}) : res.json({updated : false})
    })
    .catch(err => console.log(err));    
})


module.exports = router;
