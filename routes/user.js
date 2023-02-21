const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();


//Model
const models = require("../models");

//All users


//  Create User
router.post("/create-user", async (req, res) => {
  const result = req.body;
  console.log(result);

  const user_name = models.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then((user) => res.redirect("/"))
    .catch((err) => res.render("error", { error: err.message }));
});



module.exports = router;