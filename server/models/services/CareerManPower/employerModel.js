const mongoose = require("mongoose");

const employerModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        name: {
            type: String
        },
        fathername: {
            type: String
        },
        aadhar: {
            type: String
        },
        tenMark: {
            type: Number
        },
        twelveMark: {
            type: Number
        },
        jobpost: {
            type: String
        },
        jobexp: {
            type: Number
        },
        address: {
            type: String
        },
        company: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        mobile: {
            type: Number
        },
        email: {
            type: String
        },
        zip: {
            type: Number
        },
        pastSalary: {
            type: Number
        },
        expactedSalary: {
            type: Number
        },
        hobbies: {
            type: [String],
            default: []
        },
        gst: {
            type: String
        },
        pan: {
            type: String
        },
        cvUrl: {
            type: String
        },
        profileUrl: {
            type: String
        },
        aadharUrl: {
            type: String
        }
    },
    { timestamps: true }
);

const EmployerForm = mongoose.model("Employer", employerModelSchema);

module.exports = EmployerForm;
