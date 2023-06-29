const JointVentureForm = require("../../models/services/JointVenture/jointventure");

// Submit Joint Venture form
const submitForm = async (req, res) => {
    try {
        const {
            projectName,
            companyName,
            panNumber,
            websiteAddress,
            totalValuation,
            gstNumber,
            workRatio,
            startDate,
            endDate,
            fullName,
            email,
            contactNumber,
            aadharNumber,
            country,
            state,
            city,
            deadline,
            summary,
            description,
            organization,
            noticeType,
            url
        } = req.body;

        const formData = {
            company: {
                projectName,
                companyName,
                panNumber,
                websiteAddress,
                totalValuation,
                gstNumber,
                workRatio,
                startDate,
                endDate
            },
            personal: {
                fullName,
                email,
                contactNumber,
                aadharNumber,
                country,
                state,
                city,
                deadline,
                summary
            },
            tender: {
                description,
                organization,
                noticeType
            },
            url
        };

        const jointventureForm = new JointVentureForm(formData);
        const savedForm = await jointventureForm.save();
        res.json(savedForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
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
