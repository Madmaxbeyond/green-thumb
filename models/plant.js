const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    lastWatered: {
        type: Date,  
    },
    // frequency = hard coded drop down with choices of 7, 10, 14, 30 days
    frequency: {
        type: Number, 
        // enum: [86400, 432000000, 604800000]
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const plantSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String},
    // Make datePlanted a calendar drop down and is unchangable when editing
    datePlanted: {type: Number}, 
    isWatered: {type: Boolean, default: false},
    schedules: [scheduleSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

// Use virtual to set next watering date
// scheduleSchema.virtual('nextWatering').get(function () {
//     return this.lastWatered + this.frequency;
// });


// scheduleSchema.virtual('waterOverdue').get(function () {
//     if (this.lastWatered >= Date.now() + 86400) {
//         return true;
//     } 
//     return false;
// })




module.exports = mongoose.model('Plant', plantSchema);