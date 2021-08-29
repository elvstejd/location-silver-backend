var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: "Open for biz" });
});

module.exports = router;
