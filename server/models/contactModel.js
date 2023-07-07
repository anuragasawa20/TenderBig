const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    selectedService: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{ timestamps: true });

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;
