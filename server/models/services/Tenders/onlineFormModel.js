const mongoose = require('mongoose');

const TenderOnline = new mongoose.Schema({
    cname: String,
    cPANnum: String,
    cGSTnum: String,
    des: String,
    vendor: String,
    mobile: String,
    accholdername: String,
    ifscCode: String,
    regno: String,
    knumber: String,
    companyaddress1: String,
    companyaddress2: String,
    companycity: String,
    companystate: String,
    branchnum: String,
    ITRone: String,
    ITRtwo: String,
    ITRthree: String,
    turnover: String,
    workexp: String,
    noofworkers: String,
    directorname: String,
    fname: String,
    iDOB: String,
    pemail: String,
    paadhar: String,
    pPANnum: String,
    pmobile: String,
    wmobile: String,
    website: String,
    accnumber: String,
    email: String,
    gemreg: String,
    refno: String,
});

const TenderOnlineModel = mongoose.model('TenderOnline', TenderOnline);

module.exports = TenderOnlineModel;
