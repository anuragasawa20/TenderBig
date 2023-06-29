const mongoose = require("mongoose");

const registrationModelSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        userId: {
            type: String
        },
        company: {
            type: String
        },
        mobile: {
            type: Number
        },
        email: {
            type: String
        },
        gst: {
            type: String
        },
        pan: {
            type: String
        },
        aadhar: {
            type: String
        },
        url: {
            type: String
        }
    },
    { timestamps: true }
);

const RegistrationForm = mongoose.model("Registration", registrationModelSchema);

module.exports = RegistrationForm;
