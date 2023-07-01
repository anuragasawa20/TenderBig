const mongoose = require("mongoose");

const certificationModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        name: {
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
        regno: {
            type: String
        }
    },
    { timestamps: true }
);

const CertificationForm = mongoose.model("Certification", certificationModelSchema);

module.exports = CertificationForm;
