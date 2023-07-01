const EmployerForm = require('../../models/services/CareerManPower/employerModel');


const submitForm = async (req, res) => {
    try {
        // Extract the form data from the request body
        const {
            name,
            fathername,
            aadhar,
            tenMark,
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
            expactedSalary,
            hobbies,
            gst,
            pan,
        } = req.body;

        console.log(req)
        console.log(req.files)
        //   console.log(req)
        // Get the file URLs from the multer file uploads
        const cvUrl = req.files.resume[0].filename;
        const profileUrl = req.files.profilePhoto[0].filename;
        const aadharUrl = req.files.aadhar[0].filename;

        // Create a new instance of the EmployerForm model
        const employer = new EmployerForm({
            name,
            fathername,
            aadhar,
            tenMark,
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
            expactedSalary,
            hobbies,
            gst,
            pan,
            cvUrl,
            profileUrl,
            aadharUrl,
        });

        // Save the employer form data to the database
        const savedForm = await employer.save();

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