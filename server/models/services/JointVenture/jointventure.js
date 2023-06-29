const mongoose = require("mongoose");

const jointventureSchema = new mongoose.Schema(
    {
        company: {
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
            totalValuation: {
                type: String
            },
            gstNumber: {
                type: String
            },
            workRatio: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            },
        },
        personal: {
            fullName: {
                type: String
            },
            email: {
                type: String
            },
            contactNumber: {
                type: String
            },
            aadharNumber: {
                type: String
            },
            country: {
                type: String
            },
            state: {
                type: String
            },
            city: {
                type: String
            },
            deadline: {
                type: Date
            },
            summary: {
                type: String
            },
        },
        tender: {
            description: {
                type: String
            },
            organization: {
                type: String
            },
            noticeType: {
                type: String
            }
        },
        url: {
            type: String
        },
    },
    { timestamps: true }
);

const jointventureForm = mongoose.model("Joint-Venture", jointventureSchema);

module.exports = jointventureForm;
