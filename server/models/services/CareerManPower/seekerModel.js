const mongoose = require("mongoose");

const seekerModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        name: String,
        fathername: String,
        aadhar: String,
        tenMark: String,
        twelveMark: String,
        jobpost: String,
        jobexp: String,
        address: String,
        company: String,
        city: String,
        state: String,
        country: String,
        mobile: String,
        email: String,
        zip: String,
        pastSalary: String,
        expectedSalary: String,
        hobbies: String,
        pan: String,
        resumeurl: {
            type: String
        }
    },
    { timestamps: true }
);

const SeekerForm = mongoose.model("Seeker", seekerModelSchema);

module.exports = SeekerForm;
