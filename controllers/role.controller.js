const db = require("../models");
const Role = db.role;

exports.createRole = (req, res) => {
    // Validate request
    /*   if (!req.body.role_Id) {
           res.status(400).send({
               message: "Content can not be empty!"
           });
           return;
       }*/
    // Create a Role
    const role = {
        role_Id: req.body.role_Id,
        role_Name: req.body.role_Name,
        user_Id: req.body.user_Id,

    };
    // Save role in the database
    Role.create(role)
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
    Role.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Role with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Role with id=" + id
            });
        });
};


exports.findAll = (req, res) => {
    const title = req.query.id;
    console.log(title);
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    console.log(condition);
    Role.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving roles."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Role.update(req.body, {
        where: { role_Id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Role was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Role with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Role.destroy({
        where: { role_Id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Role was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Role with id=" + id
            });
        });
};