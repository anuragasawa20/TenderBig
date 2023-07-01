const mongoose = require("mongoose");

const registrationModelSchema = new mongoose.Schema(
    {
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
        companyProfile:{
            type: String
        },
        estYear:{
            type: String
        },
        regNo:{
            type: String
        },
        lisenceName:{
            type: String
        },
        contactPerson:{
            type: String
        },
        fatherName:{
            type: String
        },
        post:{
            type: String
        },
        gst: {
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
