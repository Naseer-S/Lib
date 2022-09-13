const db = require("../models");
const Feedback = db.feedback;


exports.createFeedback = (req, res) => {
    // Validate request
    /* if (!req.body.feedback_Id) {
         res.status(400).send({
             message: "Content can not be empty!"
         });
         return;
     }*/
    // Create a Feedback
    const feedback = {
        feedback_Id: req.body.feedback_Id,
        rating: req.body.rating,
        feedback: req.body.feedback,
        user_id: req.body.user_id,
        feedback_date: req.body.feedback_date,


    };
    // Save feedback in the database
    Feedback.create(feedback)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Feedback."
            });
        });
};



exports.findOne = (req, res) => {
    const id = req.params.id;
    Feedback.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Feedback with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Feedback with id=" + id
            });
        });
};


exports.findAll = (req, res) => {
    const title = req.query.id;
    console.log(title);
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    console.log(condition);
    Feedback.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Feedback.update(req.body, {
        where: { feedback_Id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Feedback was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Feedback with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Feedback with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Feedback.destroy({
        where: { feedback_Id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Feedback was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Feedback with id=${id}. Maybe Feedback was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Feedback with id=" + id
            });
        });
};
