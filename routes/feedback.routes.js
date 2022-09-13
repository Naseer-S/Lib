const feedbacks = require("../controllers/feedback.controller.js");
var router = require("express").Router();

// Create a new Feedback
router.post("/feedbacks", feedbacks.createFeedback);

// Get a feedback with id
router.get("/feedbacks/:id", feedbacks.findOne);
router.get("/feedbacks", feedbacks.findAll);

// Update a feedback with id
router.put("/feedbacks/:id", feedbacks.update);

// Delete a feedback with id
router.delete("/feedbacks/:id", feedbacks.delete);

module.exports = router;