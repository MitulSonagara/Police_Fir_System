const express = require("express");
const router = express.Router();
const Complain = require("../models/complain");


// Complaint Form Route
router.get("/complainform", (req, res) => {
  res.render("complainform");
});

// File Complaint Route
router.post("/complainform", async (req, res, next) => {
  // Handle filing complaint logic here

  const newComplainForm = new Complain({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    date: req.body.date,
    loc: req.body.loc,
    pin: req.body.pin,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    dis: req.body.dis,
    people: req.body.people,
    identityProof: req.body.identityProof,
    proof: req.body.proof, // Use the file path or reference returned by multer
  });

    await newComplainForm.save();
        req.flash("success", "Successfully submitted data");

      res.redirect("/dashboard");
});

module.exports = router;
