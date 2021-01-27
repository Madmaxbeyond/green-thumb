const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    lastWatered: Date,
    frequency: Number
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const plantSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String},
    datePlanted: {type: Number}, 
    inHomeLocation: {type: String},
    water: {type: String},
    sunlight: {type: String},
    schedules: [scheduleSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});


// Use virtual to set next watering date
scheduleSchema.virtual('nextWateringDate').get(function () {
    return this.lastWatered + this.frequency;
});

// Update last date watered
// scheduleSchema.methods.updateLastWatered = async function (plantId) {
//     const watered = this;
//     const wateredPlant = watered.
//     if ()
// }

module.exports = mongoose.model('Plant', plantSchema);