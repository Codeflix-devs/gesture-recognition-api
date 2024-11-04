const mongoose = require('mongoose');

const gestureSchema = new mongoose.Schema(
    {
        label: {
            type: 'string',
            required: true,
        },
        co_ordinate: {
            type: 'string',
            required: true,
        }
    },
    {
        timestamps : true,
    }
)

const Gesture = mongoose.model('gestures', gestureSchema)
module.exports = Gesture