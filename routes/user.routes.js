const users = require("../controllers/user.controller.js");
var router = require("express").Router();

// Create a new User
router.post("/users", users.create);

// Retrieve a single User with id
router.get("/users/:id", users.findOne);
router.get("/users", users.findAll);

// Update a User with id
router.put("/users/:id", users.update);

// Delete a User with id
router.delete("/users/:id", users.delete);

module.exports = router;