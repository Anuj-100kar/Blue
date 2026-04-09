const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const auth=require('../middleware/auth');
const adminOnly=require('../middleware/adminOnly');
const {
  getAllIPOs,
  addIPO,
  deleteIpo,getOngoingIpos,getListedIpos,addListedIPO,
  getLiveIPOs
} = require("../controllers/ipoController");

router.get("/", getAllIPOs);
// router.get("/ongoing-ipos",getOngoingIpos);
// router.get("/listed-ipos",getListedIpos);
// router.get("/live",getLiveIPOs);


router.post("/",auth, upload.single('logo'), addIPO);

router.post('/listed-ipo',auth,adminOnly, upload.single('logo'), addListedIPO);
router.delete("/:id",auth,adminOnly,deleteIpo);

module.exports = router;
