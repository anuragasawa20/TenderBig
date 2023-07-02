const AuctionMaterialForm = require('../../models/services/AuctionMaterials/auctionmaterials');
const { uploadMultipleFilesToS3, getLink } = require('../../config/s3function')

// Controller for submitting an auction material form
const submitForm = async (req, res) => {
  try {
    const {
      tenderNumber,
      companyName,
      regNumber,
      workExp,
      gst,
      aadharCardDirectors,
      panCardDirectors,
      companyAddress,
      website,
      projectMailId,
      contractPName,
      contactNumber,
      auctionMaterials,
      otherDetails
    } = req.body;

    let urls;

    await uploadMultipleFilesToS3(req.files)
      .then(uploadResults => {
        console.log(uploadResults);
        urls = uploadResults;
      })
      .catch(error => {
        console.error('Error uploading files:', error);
      });

    const auctionForm = new AuctionMaterialForm({
      tenderNumber,
      companyName,
      regNumber,
      workExp,
      gst,
      aadharCardDirectors,
      panCardDirectors,
      companyAddress,
      website,
      projectMailId,
      contractPName,
      contactNumber,
      auctionMaterials,
      otherDetails,
      url: urls
    });

    const savedForm = await auctionForm.save();
    res.json(savedForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting all auction material forms
const getAllForms = async (req, res) => {
  try {
    const forms = await AuctionMaterialForm.find().select('tenderNumber companyName contactNumber companyAddress');
    res.json(forms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Controller for getting a single auction material form by ID
const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await AuctionMaterialForm.findById(id);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    async function processUrls(form) {
      const links = [];
      for (const filename of form.url) {
        const link = await getLink(filename);
        links.push(link);
      }
      return links;
    }

    try {
      const links = await processUrls(form);
      console.log(links);
      form.url = links;
    } catch (error) {
      console.error('Error processing URLs:', error);
    }
    console.log(form.url)
    res.json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  submitForm,
  getAllForms,
  getFormById,
};
