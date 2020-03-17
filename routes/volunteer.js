const express = require("express");
const { check, validationResult} = require("express-validator");

const router = express.Router();









router.get("/", async (req, res) => {
  try {
    var list = ["tutoring french", "tutoring english", "tutoring web dev"];
    res.json(list);
    console.log('Mamma mia !!');
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});


module.exports = router;

