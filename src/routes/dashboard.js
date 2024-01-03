const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  // This route is protected; only authenticated users can access it
  res.render("dashboard", {
    success: req.flash("success"),
    error: req.flash("error"),
  }); // Render your dashboard template or perform other actions
});

module.exports = router;