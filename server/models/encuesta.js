const mongoose = require('mongoose');
const { Schema } = mongoose;

const EncuestaSchema = new Schema({
    user_id: { type: String, required: false},
    pregunta1: { type: String, required: false},
    pregunta2: { type: String, required: false},
    pregunta3: { type: String, required: false},
    pregunta4: { type: String, required: false},
    pregunta5: { type: String, required: false},
    pregunta6: { type: String, required: false},
    pregunta7: { type: String, required: false},
    pregunta8: { type: String, required: false},
    pregunta9: { type: String, required: false}
 
  
});

module.exports = mongoose.model('Encuesta', EncuestaSchema);