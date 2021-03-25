const express = require('express');
const mongoose = require('mongoose');

// crear el servidor
const app = express();

// conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pokemon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// puerto y arrancar servidor
app.listen(4000, () => {
    console.log('Servidor funcionando...');
});