const mongoose = require("mongoose");

const registrationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        name: {
            type: String
        },
        Gem: {
            type: String
        },
        company: {
            type: String
        },
        mobile: {
            type: String
        },
        secMobile: {
            type: String
        },
        email: {
            type: String
        },
        CIN: {
            type: String
        },
        wmobile: {
            type: String
        },
        cprofile: {
            type: String
        },
        companyEstd: {
            type: String
        },
        companypost: {
            type: String
        },
        liscence: {
            type: String
        },
        cpname: {
            type: String
        },
        fnme: {
            type: String
        },
        GST: {
            type: String
        },
        PAN: {
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
