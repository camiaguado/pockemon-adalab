const express = require('express');

// crear el servidor
const app = express();

// puerto y arrancar servidor
app.listen(4000, () => {
    console.log('Servidor funcionando...');
});