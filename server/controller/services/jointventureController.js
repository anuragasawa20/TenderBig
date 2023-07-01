const JointVentureForm = require("../../models/services/JointVenture/jointventure");

// Submit Joint Venture form
const submitForm = async (req, res) => {
    try {
        // Extract the form data from the request body
        const {
            projectName,
            companyName,
            panNumber,
            websiteAddress,
            gst,
            workRatio,
            companyemail,
            companycontact,
            cin,
            regNo,
            address,
            country,
            city,
            zip,
            tenderName,
            cinUrl,
            gstUrl,
            panUrl,
        } = req.body;

        // Create a new instance of the JointVentureForm model
        const jointventure = new JointVentureForm({
            projectName,
            companyName,
            panNumber,
            websiteAddress,
            gst,
            workRatio,
            companyemail,
            companycontact,
            cin,
            regNo,
            address,
            country,
            city,
            zip,
            tenderName,
            cinUrl,
            gstUrl,
            panUrl,
        });

        // Save the joint venture form data to the database
        const savedForm = await jointventure.save();

        res.status(200).json({
            success: true,
            message: "Form submitted successfully",
            data: savedForm,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while submitting the form",
            error: error.message,
        });
    }
};

// Get all Joint Venture forms
const getAllForms = async (req, res) => {
    try {
        const forms = await JointVentureForm.find();
        res.json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

// Get a single Joint Venture form
const getFormById = async (req, res) => {
    try {
        const formId = req.params.id;
        const form = await JointVentureForm.findById(formId);
        if (!form) {
            return res.status(404).json({ error: "Form not found" });
        }
        res.json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

module.exports = { submitForm, getAllForms, getFormById };
