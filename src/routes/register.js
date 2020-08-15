const express = require('express');
const bcrypt = require('bcrypt');
const UserRoutine = require('../Models/UserRoutine');
const router = express.Router();

router.post('/', (req, res) => {
        bcrypt.hash(req.body.password, 10).then((hashPassword) => {
            const userRoutine = new UserRoutine(
                {
                    username : req.body.username,
                    password : hashPassword,
                    email : req.body.email,
                    routines : req.body.routines
                }
            );
            userRoutine.save().then(() => res.json({registered : true})).catch(() => res.json({registered : false}));
        })
    }
)
    
module.exports = router;