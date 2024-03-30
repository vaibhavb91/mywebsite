const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

// send mail
router.post("/register", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vaibhavbaghdane1234@gmail.com",
        pass: "mart ludo olep efvd",
      },
    });

    const mailOptions = {
      from: email,
      to: "vaibhavbaghdane1234@gmail.com",
      subject: "kalasource website contact page data",
      html: `<h2>New Email </h2>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router;
