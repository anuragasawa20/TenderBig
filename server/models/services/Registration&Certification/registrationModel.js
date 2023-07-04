const mongoose = require("mongoose");

const registrationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        company: String,
        mobile: String,
        secMobile: String,
        email: String,
        cwebsite: String,
        CIN: String,
        wmobile: String,
        cprofile: String,
        companyEstd: String,
        otherDetails: String,
        companypost: String,
        liscence: String,
        cpname: String,
        category: String,
        fname: String,
        GST: String,
        PAN: String,
        address: String,
        companycountry: String,
        companycity: String,
        companystate: String,
        url: {
            type: String
        }
    },
    { timestamps: true }
);

const RegistrationForm = mongoose.model("Registration", registrationModelSchema);

module.exports = RegistrationForm;
