const mongoose = require('mongoose');

const UserRoutineSchema = mongoose.Schema(
    {
        username: {
            type : String,
            required : true,
            unique: true,
            trim : true
        },
        password: {
            type : String,
            required : true,
            trim : true
        },
        email: {
            type : String,
            required : true,
            trim : true
        },
        routines : {
            type: [
                {   
                    _id : mongoose.Schema.Types.ObjectId, 
                    name : String, 
                    todos : [
                        {
                            _id : mongoose.Schema.Types.ObjectId, 
                            todo : String, 
                            isCompleted : Boolean
                        }
                    ]
                }
            ],
        }
    } 
)

module.exports = mongoose.model('UserRoutine', UserRoutineSchema);