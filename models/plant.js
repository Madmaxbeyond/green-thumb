const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String},
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

// Virtual with lastWatered
plantSchema.virtual('nextWateringDate').get(function () {
    return new Date(this.lastWatered.getTime() + this.frequency);
});
           
            
module.exports = mongoose.model('Plant', plantSchema);