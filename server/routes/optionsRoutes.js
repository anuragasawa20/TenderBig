const express = require('express');
const router = express.Router();
const optionsController = require('../controller/optionsController');

// Route for inserting sectors
router.post('/sectors', optionsController.insertSectors);

// Route for inserting products
router.post('/products', optionsController.insertProducts);

// Route for inserting departments
router.post('/departments', optionsController.insertDepartments);

// Route for inserting categories
router.post('/categories', optionsController.insertCategories);

// Route for inserting licenses
router.post('/licenses', optionsController.insertLicenses);

// Route for inserting actionMaterial
router.post('/actionmaterials', optionsController.insertActionMaterial);

// Route for removing a value from sectors array
router.delete('/sectors/:value', optionsController.removeSector);

// Route for removing a value from products array
router.delete('/products/:value', optionsController.removeProduct);

// Route for removing a value from departments array
router.delete('/departments/:value', optionsController.removeDepartment);

// Route for removing a value from categories array
router.delete('/categories/:value', optionsController.removeCategory);

// Route for removing a value from licenses array
router.delete('/licenses/:value', optionsController.removeLicenses);

// Route for removing a value from actionMaterial array
router.delete('/actionmaterials/:value', optionsController.removeActionMaterial);

// Route for getting all arrays
router.get('/alloptions', optionsController.getAllOptions);

module.exports = router;
