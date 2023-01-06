const router = require("express").Router();
const User = require("../models/user.js");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.password == req.body.password)
      return res.status(200).send({ message: "User found" });
    else return res.status(401).send({ message: "Incorrect details" });
  } catch (error) {
    res.status(500).send({ message: "Login failed" });
  }
});

module.exports = router;
