const express = require('express');
const bcrypt = require('bcrypt');
const UserRoutine = require('../Models/UserRoutine');
const router = express.Router();

router.post('/', (req, res) => {
    UserRoutine.findOne({username : req.body.username})
                .then(user => {
                        if(user) {
                            bcrypt.compare(req.body.password, user.password).then((result) => {
                                if(result === true) {
                                    res.json({auth : true, username : req.body.username});
                                } else {
                                    res.json({auth : false})
                                }
                            })
                        } else {
                            res.send({auth : false})
                        }
                    }
                )
                .catch(err => console.log(err));
})
    
module.exports = router;