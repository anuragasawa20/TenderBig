const SeekerForm = require('../../models/services/CareerManPower/seekerModel');

// Controller for form submission
const submitForm = async (req, res) => {
    try {
        // Extract the form data from the request body
        const {
            userId,
            companyName,
            mobile,
            email,
            work,
            jobpost,
            exp,
            salary,
            companyUrl,
            companyProfile,
            companyPNumber,
            regNo,
            gst,
            pan,
            address,
            city,
            zip,
            state,
            country,
            office,
            holidays,
            workingDays,
            post,
            url,
        } = req.body;

        // Create a new instance of the SeekerForm model
        const seeker = new SeekerForm({
            userId,
            companyName,
            mobile,
            email,
            work,
            jobpost,
            exp,
            salary,
            companyUrl,
            companyProfile,
            companyPNumber,
            regNo,
            gst,
            pan,
            address,
            city,
            zip,
            state,
            country,
            office,
            holidays,
            workingDays,
            post,
            url,
        });

        // Save the seeker form data to the database
        const savedForm = await seeker.save();

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
