const TenderOnlineModel = require("../../models/services/Tenders/onlineFormModel");

const submitForm = async (req, res) => {
    try {
        const newRecord = await TenderOnlineModel.create(req.body);
        res.status(200).json({success:true, newRecord});
    } catch (error) {
        res.status(500).json({ error: "Failed to create a new record" });
    }
};

const getAllForms = async (req, res) => {
    try {
        const records = await TenderOnlineModel.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch records" });
    }
};

const getFormById = async (req, res) => {
    const { id } = req.params;
    try {
        const record = await TenderOnlineModel.findById(id);
        if (!record) {
            return res.status(404).json({ error: "Record not found" });
        }
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the record" });
    }
};

module.exports = {
    submitForm,
    getAllForms,
    getFormById,
};