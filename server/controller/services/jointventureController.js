const JointVentureForm = require("../../models/services/JointVenture/jointventure");

// Submit a new document
const submitForm = async (req, res) => {
    try {
        const userId = req.userId;
        req.body.userId = userId;
        const newDocument = await JointVentureForm.create(req.body);
        res.status(201).json({ success: true, newDocument });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to submit the document.' });
    }
};

// Get all documents
const getAllForms = async (req, res) => {
    try {
        const documents = await JointVentureForm.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve documents.' });
    }
};

// Get a document by ID
const getFormById = async (req, res) => {
    const { id } = req.params;

    try {
        const document = await JointVentureForm.findById(id);
        if (!document) {
            return res.status(404).json({ error: 'Document not found.' });
        }
        res.json(document);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the document.' });
    }
};

module.exports = { submitForm, getAllForms, getFormById };