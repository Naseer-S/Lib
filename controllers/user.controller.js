const db = require("../models");
const User = db.user;
//const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  console.log('usercontroller');
  if (!req.body.user_Id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a User
  const user = {
    user_Id: req.body.user_Id,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    gender: req.body.gender,
    address: req.body.address,
    date_Of_birth: req.body.date_Of_birth,
    contact_Number: req.body.contact_Number,

  };
  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};


exports.findAll = (req, res) => {
  const title = req.query.user_Id;
  console.log(title);
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  console.log(condition);
  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  User.update(req.body, {
    where: { user_Id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { user_Id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};
