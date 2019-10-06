const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
//welcome page
router.get('/', (req, res) => {
  res.json("Welcome")
});

module.exports = router;