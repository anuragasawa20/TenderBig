const mongoose = require("mongoose");

const employerModelSchema = new mongoose.Schema(
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
        url: {
            type: String
        },
        resumeurl: {
            type: String
        }
    },
    { timestamps: true }
);

const EmployerForm = mongoose.model("Employer", employerModelSchema);

module.exports = EmployerForm;
