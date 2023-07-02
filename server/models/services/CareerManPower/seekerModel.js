const mongoose = require("mongoose");

const seekerModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        companyName: {
            type: String
        },
        mobile: {
            type: Number
        },
        email: {
            type: String
        },
        work: {
            type: String
        },
        jobpost: {
            type: String
        },
        exp: {
            type: Number
        },
        salary: {
            type: Number
        },
        companyUrl: {
            type: String
        },
        companyProfile: {
            type: String
        },
        companyPNumber: {
            type: Number
        },
        regNo: {
            type: String
        },
        gst: {
            type: String
        },
        pan: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        zip: {
            type: Number
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        officetime: {
            type: String
        },
        holidays: {
            type: Number
        },
        workingDays: {
            type: Number
        },
        post: {
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
