const mongoose = require("mongoose");

const seekerModelSchema = new mongoose.Schema(
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
        resumeurl: {
            type: String
        }
    },
    { timestamps: true }
);

const SeekerForm = mongoose.model("Seeker", seekerModelSchema);

module.exports = SeekerForm;
