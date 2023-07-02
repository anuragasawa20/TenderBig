const mongoose = require("mongoose");

const companyCertificationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        cinReg: {
            type: String
        },
        companyName: {
            type: String
        },
        companyProfile: {
            type: String
        },
        contactNumber: {
            type: Number
        },
        contractPName: {
            type: String
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
        requestLicense: {
            type: String
        },
        selectedPositions: {
            type: String
        },
        website: {
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

const CompanyForm = mongoose.model("Company-Certification", companyCertificationModelSchema);

module.exports = CompanyForm;
