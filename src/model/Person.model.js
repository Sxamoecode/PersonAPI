const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: {
        createdAt: "dateCreated",
        updatedAt: true
    }
})

const Person = mongoose.model("Person", proSchema);

module.exports = Person;
