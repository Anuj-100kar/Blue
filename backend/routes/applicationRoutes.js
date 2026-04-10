const express = require("express");
const router = express.Router();
const { applyIPO,getApplications } = require("../controllers/applicationController");

router.post("/apply", applyIPO);
router.get("/applications",getApplications);

module.exports = router;