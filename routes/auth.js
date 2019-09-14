const router = require("express").Router();
const bcrypt = require('bcryptjs')
const User = require("../models/User");
const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(6)
    .required(),
  password: Joi.string()
    .min(6)
    .required()
});

router.post("/register", async (req, res) => {
  const value = await schema.validate(req.body);
  if (value.error) return res.status(400).send(value.error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10)

  const hashPassword = await bcrypt.hash(req.body.password, salt)
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
