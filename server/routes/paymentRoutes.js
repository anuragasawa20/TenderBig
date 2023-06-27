const express = require("express");
const router = express.Router();
const paymentsController = require("../controller/paymentController");
const {verifyToken , isNotUser} = require("../middleware/auth")

//Buy Subscription
router.post("/subscribe",verifyToken, paymentsController.buySubscription);

//Verify payment and save rerence in DB
router.post("/paymentverification",verifyToken, paymentsController.verify);

//Get Razorpay key 
router.get("/razorpaykey",verifyToken, paymentsController.getrazorpaykey);

module.exports = router;