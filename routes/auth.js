const router = require("express").Router();
const User = require("../models/User");
const {schema} = require('../validation')
const Joi = require("@hapi/joi");

router.post("/register", async (req, res) => {
  const value = await schema.validate({ username: 'abc', birth_year: 1994 })
 
  if (value.error) {
    res.status(400).send(value.error.details[0].message);
  } else {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    try {
      const savedUser = await user.save();
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

module.exports = router;
