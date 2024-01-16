const express = require("express");
const { getStudent,postStudent } = require("../Controller/student.js");
  
const router = express.Router();


router.get('/',getStudent);
router.post('/',postStudent);

module.exports = router;  