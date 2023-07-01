const mongoose = require("mongoose");

const jointventureSchema = new mongoose.Schema(
    {
        projectName: {
            type: String
        },
        companyName: {
            type: String
        },
        panNumber: {
            type: String
        },
        websiteAddress: {
            type: String
        },
        gst: {
            type: String
        },
        workRatio: {
            type: String
        },
        companyemail: {
            type: String
        },
        companycontact: {
            type: Number
        },
        cin: {
            type: String
        },
        regNo: {
            type: String
        },
        address: {
            type: String
        },
        country: {
            type: String
        },
        city: {
            type: String
        },
        zip: {
            type: Number
        },
        tenderName: {
            type: String
        },
        cinUrl: {
            type: String
        },
        gstUrl: {
            type: String
        },
        panUrl: {
            type: String
        },
    },
    { timestamps: true }
);

const jointventureForm = mongoose.model("Joint-Venture", jointventureSchema);

module.exports = jointventureForm;
