const mongoose = require("mongoose");

const individualCertificationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        aadharNumber: {
            type: String
        },
        address: {
            type: String
        },
        dob: {
            type: Date
        },
        email: {
            type: String
        },
        fatherName: {
            type: String
        },
        mobileNumber: {
            type: String
        },
        name: {
            type: String
        },
        panNumber: {
            type: String
        },
        requestLicense: {
            type: String
        },
        workingField: {
            type: String
        },
        url: {
            type: String
        }
    },
    { timestamps: true }
);

const IndividualForm = mongoose.model("Individual-Certification", individualCertificationModelSchema);

module.exports = IndividualForm;
