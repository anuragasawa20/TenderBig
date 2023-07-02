const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/multer')
const employerController = require('../controller/services/employerFormController');
const seekerController = require('../controller/services/seekerFormController');
const registrationController = require('../controller/services/registrationFormController');
const certificationController = require('../controller/services/cerificationFormController');
const auctionMaterialsController = require('../controller/services/auctionMaterialFormController');
const jointventureController = require('../controller/services/jointventureController');
const tenderOfflineController = require("../controller/services/offlineTenderFormController");
const gemregistrationController = require("../controller/services/gemregistrationFormController");

//Career & Man Power

//Employer
// Route for form submission
router.post('/employer/submit-form',upload.any(),employerController.submitForm);

// Route for getting all forms
router.get('/employer/forms', employerController.getAllForms);

// Route for getting a single form
router.get('/employer/forms/:id', employerController.getSingleForm);

//Seeker 
// Route for form submission
router.post('/seeker/submit-form', seekerController.submitForm);

// Route for getting all forms
router.get('/seeker/forms', seekerController.getAllForms);

// Route for getting a single form
router.get('/seeker/forms/:id', seekerController.getSingleForm);

//Registration/Certificate

//Registration
// Route for submitting a registration form
router.post('/register/registration', registrationController.submitForm);

// Route for getting all registration forms
router.get('/register/registration', registrationController.getAllForms);

// Route for getting a single registration form by ID
router.get('/register/registration/:id', registrationController.getFormById);

//Certification
// Route for submitting a certification form
router.post('/cert/certification', certificationController.submitForm);

// Route for getting all certification forms
router.get('/cert/certification', certificationController.getAllForms);

// Route for getting a single certification form by ID
router.get('/cert/certification/:id', certificationController.getFormById);

//Auction Materials
// Route for submitting an auction material form
router.post('/aumt/auction-material', auctionMaterialsController.submitForm);

// Route for getting all auction material forms
router.get('/aumt/auction-material', auctionMaterialsController.getAllForms);

// Route for getting a single auction material form by ID
router.get('/aumt/auction-material/:id', auctionMaterialsController.getFormById);

//Joint Venture
// Submit Joint Venture form
router.post("/jv/submitjv", jointventureController.submitForm);

// Get all Joint Venture forms
router.get("/jv/getjv", jointventureController.getAllForms);

// Get a single Joint Venture form
router.get("/jv/:id", jointventureController.getFormById);

//Tender Offline
// Submit Tender Offline Form
router.post("/tender/offline", tenderOfflineController.submitForm);

// Get All Tender Offline Forms
router.get("tender/getall", tenderOfflineController.getAllForms);

// Get Single Tender Offline Form by ID
router.get("tender/offline/:id", tenderOfflineController.getSingleForm);

//Gem Registration
// Submit Gem Registration Form
router.post("/gem/submit", gemregistrationController.submitForm);

// Get All Gem Registration Forms
router.get("gem/getall", gemregistrationController.getAllForms);

// Get Single Gem Registration by ID
router.get("gem/:id", gemregistrationController.getFormById);

module.exports = router;
