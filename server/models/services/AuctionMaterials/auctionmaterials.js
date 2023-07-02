const mongoose = require("mongoose");

const auctionmaterialsModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        tenderNumber: {
            type: String
        },
        companyName: {
            type: String
        },
        regNumber: {
            type: String
        },
        workExp: { type: String },
        gst: { type: String },
        aadharCardDirectors: { type: String },
        panCardDirectors: { type: String },
        companyAddress: { type: String },
        website: { type: String },
        projectMailId: { type: String },
        contractPName: { type: String },
        contactNumber: { type: String },
        auctionMaterials: { type: String },
        otherDetails: { type: String },
        url: {
            type: [String]
        }
    },
    { timestamps: true }
);

const AuctionMaterialForm = mongoose.model("Auction-Material", auctionmaterialsModelSchema);

module.exports = AuctionMaterialForm;
