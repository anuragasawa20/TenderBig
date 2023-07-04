const mongoose = require("mongoose");

const seekerModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        company: {
            type: String
        },
        mobile: {
            type: String
        },
        email: {
            type: String
        },
        cwork: {
            type: String
        },
        jobpost: {
            type: String
        },
        experience: {
            type: String
        },
        salary: {
            type: String
        },
        curl: {
            type: String
        },
        companyprofile: {
            type: String
        },
        contactpnumber: {
            type: String
        },
        regno: {
            type: String
        },
        PAN: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        officetiming: {
            type: String
        },
        holidays: {
            type: String
        },
        workingdays: {
            type: String
        },
        seekerpost: {
            type: String
        },
        resumeurl: {
            type: String
        }
    },
    { timestamps: true }
);

const SeekerForm = mongoose.model("Seeker", seekerModelSchema);

module.exports = SeekerForm;
