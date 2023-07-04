const TenderOnlineModel = require("../../models/services/Tenders/onlineFormModel");

const submitForm = async (req, res) => {
    try {
        const {
            cname,
            cPANnum,
            cGSTnum,
            des,
            vendor,
            mobile,
            accholdername,
            ifscCode,
            regno,
            knumber,
            companyaddress1,
            companyaddress2,
            companycity,
            companystate,
            branchnum,
            ITRone,
            ITRtwo,
            ITRthree,
            turnover,
            workexp,
            noofworkers,
            directorname,
            fname,
            iDOB,
            pemail,
            paadhar,
            pPANnum,
            pmobile,
            wmobile,
            website,
            accnumber,
            email,
            gemreg,
            refno,
        } = req.body;

        const newForm = await TenderOnlineModel.create({
            cname,
            cPANnum,
            cGSTnum,
            des,
            vendor,
            mobile,
            accholdername,
            ifscCode,
            regno,
            knumber,
            companyaddress1,
            companyaddress2,
            companycity,
            companystate,
            branchnum,
            ITRone,
            ITRtwo,
            ITRthree,
            turnover,
            workexp,
            noofworkers,
            directorname,
            fname,
            iDOB,
            pemail,
            paadhar,
            pPANnum,
            pmobile,
            wmobile,
            website,
            accnumber,
            email,
            gemreg,
            refno,
        });

        res.status(201).json({ success: true, data: newForm });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getAllForms = async (req, res) => {
    try {
        const forms = await TenderOnlineModel.find();
        res.status(200).json({ success: true, data: forms });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getFormById = async (req, res) => {
    try {
        const form = await TenderOnlineModel.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ success: false, error: 'Form not found' });
        }
        res.status(200).json({ success: true, data: form });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    submitForm,
    getAllForms,
    getFormById,
};