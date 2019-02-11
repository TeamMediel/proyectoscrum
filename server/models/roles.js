const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolesSchema = new Schema({
    name: { type: String, required: true}
  
});

module.exports = mongoose.model('Roles', RolesSchema);