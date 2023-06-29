const EmployerForm = require('../../models/services/CareerManPower/employerModel');

// Controller for form submission
const submitForm = async (req, res) => {
    try {
        const { name, userId, company, mobile, email, gst, pan, url, resumeurl } = req.body;

        const employerForm = new EmployerForm({
            name,
            userId,
            company,
            mobile,
            email,
            gst,
            pan,
            url,
            resumeurl,
        });

        const savedForm = await employerForm.save();
        res.json(savedForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};


// Controller for getting all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await EmployerForm.find();
        res.json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

// Controller for getting a single form
const getSingleForm = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await EmployerForm.findById(id);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    submitForm,
    getAllForms,
    getSingleForm,
};