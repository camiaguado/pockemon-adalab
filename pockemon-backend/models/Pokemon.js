const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    numero: { type: Number },
    nombre: { type: String },
    tipo: { type: String },
    imagen: { type: String },
    evolucion: { type: String },
})

module.exports = mongoose.model('Pockemon', pokemonSchema);