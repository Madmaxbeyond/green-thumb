const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {type: String, required: true},
    plantType: {},
    location: {type: String},
    water: {type: String},
    sunlight: {type: String},
    // schedule: [scheduleSchema], should this be an array??
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Plant', plantSchema);