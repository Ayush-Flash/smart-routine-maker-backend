require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./src/util/database');

const RegisterRoute = require('./src/routes/register');
const LoginRoute = require('./src/routes/login');
const AddRoutineRoute = require('./src/routes/addRoutine');
const DeleteRoutineRoute = require('./src/routes/deleteRoutine');
const AddTodoRoute = require('./src/routes/addTodo');
const DeleteTodoRoute = require('./src/routes/deleteTodo');
const GetRoutinesRoute = require('./src/routes/getRoutines');
const UpdateTodoRoute = require('./src/routes/updateTodo');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
        return res.status(200).json({});
    }
    next();
})

server.use(cors());

server.get('/favicon.ico', (req, res) => res.status(204));

server.use('/updateTodo', UpdateTodoRoute);

server.use('/deleteTodo', DeleteTodoRoute);

server.use('/addTodo', AddTodoRoute);

server.use('/deleteRoutine', DeleteRoutineRoute)

server.use('/addRoutine', AddRoutineRoute);

server.use('/getRoutines', GetRoutinesRoute);

server.use('/login', LoginRoute);

server.use('/register', RegisterRoute);

server.get('/', (req, res) => {
    res.send("<h1>Hello this is smart-routine-tracker-REST-API(backend)</h1>");
})

server.listen(PORT);