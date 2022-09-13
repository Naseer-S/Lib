const roles = require("../controllers/role.controller.js");
var router = require("express").Router();

// Create a new Role
router.post("/roles", roles.createRole);

router.get("/roles/:id", roles.findOne);
router.get("/roles", roles.findAll);

router.put("/roles/:id", roles.update);

router.delete("/roles/:id", roles.delete);

module.exports = router;