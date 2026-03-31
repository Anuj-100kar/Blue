const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const {
  getAllIPOs,
  addIPO,
  deleteIpo,getOngoingIpos,getListedIpos,addListedIPO,
  getLiveIPOs
} = require("../controllers/ipoController");

router.get("/", getAllIPOs);

// 👇 Add multer middleware here
router.post("/", upload.single('logo'), addIPO);

router.delete("/:id",deleteIpo);
router.get("/ongoing-ipos",getOngoingIpos);
router.get("/listed-ipos",getListedIpos);
router.post('/listed-ipo', upload.single('logo'), addListedIPO);

router.get("/live",getLiveIPOs);

module.exports = router;
