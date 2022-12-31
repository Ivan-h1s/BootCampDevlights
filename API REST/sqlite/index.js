const express = require('express');
const db = require('./models/indexsql');

const tasksRoute = require('./routes/tasksRoute');
const rolesRoute = require('./routes/rolesRoute');
const usersRoute = require('./routes/usersRoute');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRoute);
app.use('/roles', rolesRoute);
app.use('/users', usersRoute);

db.sync().then(() => {
    console.log('Conectado a SQLite');
}).catch((error) => {
    console.log('Hubo un error al conectarse a SQLite');
});

app.listen(3000, 'localhost', () => {
    console.log('Servidor funcionando en puerto 3000');
});