
const AuctionMaterialForm = require("../models/services/AuctionMaterials/auctionmaterials");
const EmployerForm = require("../models/services/CareerManPower/employerModel");
const SeekerForm = require("../models/services/CareerManPower/seekerModel");
const CompanyForm = require("../models/services/Registration&Certification/companyCertificationModel");
const IndividualForm = require("../models/services/Registration&Certification/indivisualCertificationModel");
const RegistrationForm = require("../models/services/Registration&Certification/registrationModel");
const userModel = require("../models/userModel");
const jointventureForm = require("../models/services/JointVenture/jointventure");
const TenderOnlineModel = require("../models/services/Tenders/onlineFormModel");
const gemregistrationForm = require("../models/services/GemRegistration/gemregistration");

class User {

    async getSingleUser(req, res) {
        let { userId } = req.params;

        if (!userId) {
            return res.json({ error: "All filled must be required" });
        } else {
            try {
                let User = await userModel
                    .find({ userId: userId });
                if (User) {
                    return res.json({ User });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    async getAllUser(req, res) {
        try {
            const { count, subscription } = req.body;
            let query = {};

            if (subscription) {
                query['subscription.status'] = subscription;
            }

            if (count === true) {
                const userCount = await userModel.countDocuments(query);
                return res.json({ count: userCount });
            } else {
                const users = await userModel.find(query);
                res.json(users);
            }
        } catch (error) {
            console.error('Error retrieving users:', error);
            res.status(500).json({ error: 'An error occurred while retrieving users' });
        }
    }

    async updateUserRole(req, res) {
        try {

            let { userId, userRole } = req.body;

            const user = await userModel.findOneAndUpdate(
                { userId: userId },
                { userRole: userRole },
                { new: true }
            );

            if (user) {
                return res.json({ success: "User role updated successfully" });
            } else {
                return res.json({ error: "User not found" });
            }
        } catch (error) {
            console.error('Error updating user role:', error);
            return { error: 'An error occurred while updating user role' };
        }
    };

    async deleteUser(req, res) {

        const userId = req.params.userId;

        try {
            const deletedUser = await userModel.findOneAndDelete({ userId });

            if (deletedUser) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }

    async newUsers(req, res) {
        const weeks = parseInt(req.params.weeks);

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - weeks * 7);

        try {
            const users = await userModel.find({
                createdAt: { $gte: startDate },
            });

            res.json(users);
        } catch (error) {
            res.sendStatus(500);
        }
    }

    async statistics(req, res) {
        try {
            const totalCount = await userModel.countDocuments();
            const adminCount = await userModel.countDocuments({ userRole: 'admin' });
            const employeeCount = await userModel.countDocuments({ userRole: 'employee' });
            const hrCount = await userModel.countDocuments({ userRole: 'hr' });
            const userCount = await userModel.countDocuments({ userRole: 'user' });
            const activeSubscriptionCount = await userModel.countDocuments({ 'subscription.status': 'active' });
            const inactiveSubscriptionCount = await userModel.countDocuments({ 'subscription.status': 'inactive' });

            res.json({
                totalCount,
                adminCount,
                employeeCount,
                hrCount,
                userCount,
                activeSubscriptionCount,
                inactiveSubscriptionCount
            });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching user statistics.', error });
        }
    }

    async ByUserRole(req, res) {
        try {
            const { userRole } = req.params;
            const users = await userModel.find({ userRole });
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server Error' });
        }
    }

    async DetailsById(req, res) {
        const userId = req.params.userId;
        const allForms = [{
            formName, number
        }];
        try {

            const form = await AuctionMaterialForm.find({ userId });
            if (form) {
                allForms.push({ formName: 'Auction Material', number: form.length })
            }
            const companyForm = await CompanyForm.find({ userId });
            if (companyForm) {
                allForms.push({ formName: 'Company', number: companyForm.length })
            }

            const employerForm = await EmployerForm.find({ userId });
            if (employerForm) {
                allForms.push({ formName: 'employer', number: employerForm.length })
            }

            const seekerForm = await SeekerForm.find({ userId });
            if (seekerForm) {
                allForms.push({ formName: 'seeker', number: seekerForm.length })
            }
            const iCertficationForm = await IndividualForm.find({ userId });
            if (iCertficationForm) {
                allForms.push({ formName: 'Individual Certification', number: iCertficationForm.length })
            }

            const CompanyCertficationForm = await CompanyForm.find({ userId });
            if (CompanyCertficationForm) {
                allForms.push({ formName: 'Company Certification', number: CompanyCertficationForm.length })
            }

            const registrationForm = await RegistrationForm.find({ userId });
            if (registrationForm) {
                allForms.push({ formName: 'registration', number: registrationForm.length })
            }

            const JointventureForm = await jointventureForm.find({ userId });
            if (JointventureForm) {
                allForms.push({ formName: 'joint venture', number: JointventureForm.length })
            }
            const tenderOffilneForm = await TenderOfflineForm.find({ userId });
            if (tenderOffilneForm) {
                allForms.push({ formName: 'Tender Offline', number: tenderOffilneForm.length })
            }
            const tenderOnlilneForm = await TenderOnlineModel.find({ userId });
            if (tenderOnlilneForm) {
                allForms.push({ formName: 'Tender Online', number: tenderOnlilneForm.length })
            }
            const gemRegistrationForm = await gemregistrationForm.find({ userId });
            if (gemRegistrationForm) {
                allForms.push({ formName: 'Gem Registration', number: gemRegistrationForm.length })
            }
            console.log(allForms);
            res.json(allForms);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server Error' });
        }
    }
}

const usersController = new User();
module.exports = usersController;
