const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemonControllers');

module.exports = function() {

    // Obtiene todos los pokemon
    router.get('/pokemones',
        pokeController.obtenerListaPokemones
    )

    return router;
}