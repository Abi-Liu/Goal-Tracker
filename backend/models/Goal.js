const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Goal", GoalSchema)