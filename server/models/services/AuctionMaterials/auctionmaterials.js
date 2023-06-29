const mongoose = require("mongoose");

const auctionmaterialsModelSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        tenderBidNo: {
            type: String
        },
        url: {
            type: String
        },
        docurl: {
            type: String
        }
    },
    { timestamps: true }
);

const AuctionMaterialForm = mongoose.model("Auction-Material", auctionmaterialsModelSchema);

module.exports = AuctionMaterialForm;
