const mongoose = require("mongoose");

const individualCertificationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        name: String,
        fatherName: String,
        dob: String,
        aadharNumber: String,
        panNumber: String,
        workingField: String,
        companyaddress1: String,
        companyaddress2: String,
        companycity: String,
        companystate: String,
        zipcode: String,
        companycountry: String,
        others: String,
        mobileNumber: String,
        email: String,
        requestLicense: String,
    },
    { timestamps: true }
);

const IndividualForm = mongoose.model("Individual-Certification", individualCertificationModelSchema);

module.exports = IndividualForm;
