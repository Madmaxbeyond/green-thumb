const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const scheduleSchema = new Schema({
//     lastWatered: {
//         type: Date,  
//     },
//     // frequency = hard coded drop down with choices of 7, 10, 14, 30 days
//     frequency: {
//         type: Number, 
//         // enum: [86400, 432000000, 604800000]
//     }
// }, {
//     timestamps: true,
//     toJSON: { virtuals: true }
// });


const plantSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String},
    // Make datePlanted a calendar drop down and is unchangable when editing
    datePlanted: {type: Number}, 
    // isWatered: {type: Boolean, default: false},
    lastWatered: { type: Date},
    frequency: {
        type: Number,
        // days: 7, 10, 14, 30
        enum: [604800000, 864000000, 1209600000, 2592000000]
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

// Use virtual to set next watering date
plantSchema.virtual('nextWateringDate').get(function () {
    return new Date(parseInt('1612231797602') + this.frequency);
});


// Virtual with lastWatered
// plantSchema.virtual('nextWateringDate').get(function () {
//     return new Date(this.lastWatered.getTime() + this.frequency);
// });


// scheduleSchema.virtual('waterOverdue').get(function () {
//     if (this.lastWatered >= Date.now() + 86400) {
//         return true;
//     } 
//     return false;
// })




module.exports = mongoose.model('Plant', plantSchema);