const Pokemon = require('../models/Pokemon'); // no es necesario


exports.nuevoPokemon = async(req, res, next) => {

    // creo el pokemon con datos de req.body
    const pokemon = new Pokemon(req.body);
    try {
        await pokemon.save();
        res.json({mensaje: 'El pokemon se agrego correctamente.'});
    } catch (error) {
        console.log(error);
        next();
    }
    
}


// obtiene todos los pokemones

exports.obtenerListaPokemones = async (req, res, next) => {
    try {
        const pokemones = await Pokemon.find({});
        res.json(pokemones);
    } catch (error) {
        console.log(error);
        next();
    }
}