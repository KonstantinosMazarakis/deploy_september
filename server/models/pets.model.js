const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name cannot be empty"],
            minlength: [3, "Name has to be at least 3 characters long"]
        },
        type: {
            type: String,
            required: [true, "Type cannot be empty"],
            minlength: [3, "Type has to be at least 3 characters long"]
        },
        description: {
            type: String,
            required: [true, "Description cannot be empty"],
            minlength: [3, "Description has to be at least 3 characters long"]
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        },
    },
    { timestamps: true }
);



const Pets = mongoose.model("Pets", PetsSchema)

module.exports = Pets


