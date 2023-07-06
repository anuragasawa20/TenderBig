const SeekerForm = require('../../models/services/CareerManPower/seekerModel');

// Controller for form submission
const submitForm = async (req, res) => {
    try {
        const {
            name,
            fathername,
            aadhar,
            tenMarkType,
            tenMark,
            twelveMarkType,
            twelveMark,
            jobpost,
            jobexp,
            address,
            company,
            city,
            state,
            country,
            mobile,
            email,
            zip,
            pastSalary,
            expectedSalary,
            hobbies,
            pan,
            resumeUrl,
            photoUrl,
            aadharUrl
        } = req.body;

        const newSeeker = await SeekerForm.create({
            name,
            fathername,
            aadhar,
            tenMarkType,
            tenMark,
            twelveMarkType,
            twelveMark,
            jobpost,
            jobexp,
            address,
            company,
            city,
            state,
            country,
            mobile,
            email,
            zip,
            pastSalary,
            expectedSalary,
            hobbies,
            pan,
            resumeUrl,
            photoUrl,
            aadharUrl
        });

        res.status(201).json({ success: true, data: newSeeker });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Controller for getting all forms
const getAllForms = async (req, res) => {
    try {
        const forms = await SeekerForm.find();
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
        const form = await SeekerForm.findById(id);
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
