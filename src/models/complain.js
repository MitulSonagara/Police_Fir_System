const mongoose = require('mongoose');

const complainFormSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  number: {
    type: String, // Assuming the phone number can be stored as a string
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    // required: true
  },
  loc: {
    type: String,
    // required: true
  },
  pin: {
    type: String,
    // required: true
  },
  city: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  dis: {
    type: String,
    // required: true
  },
  people: {
    type: Number,
    // required: true
  },
  identityProof: {
    type: String,
    enum: ['aadhar', 'pan', 'voterID'],
    // required: true
  },
  // You might want to store the uploaded file information, for example, the file path or a reference
  // You can customize this based on your storage solution (e.g., AWS S3, local storage, etc.)
  proof: {
    type: String, // Assuming you store the file path or reference as a string
    // required: true
  }
});

const Complain = mongoose.model("Complain", complainFormSchema);

module.exports = Complain;
