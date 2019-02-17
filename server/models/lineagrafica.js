const mongoose = require('mongoose');
const { Schema } = mongoose;

const LineagraficaSchema = new Schema({
    loli: { type: String, required: true},
    color: { type: String, required: true},
    boy: { type: String, required: true},
    girl: { type: String, required: true},
    background: { type: String, required: true}
});

module.exports = mongoose.model('Lineagrafica', LineagraficaSchema);