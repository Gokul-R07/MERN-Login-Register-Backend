const router = require("express").Router();
const User = require("../models/user.js");
router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return  res.status(409).send({ message: "Email already exits" });
    await new User(req.body).save();
    res.status(200).send({ message: "User created  successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});
module.exports = router;
