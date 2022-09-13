const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt")
const Joi = require('joi');

//const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const schema = Joi.object({
    user_Id: Joi.string().max(10),
    userName: Joi.string().alphanum().max(10),
    password: Joi.string(),
    user_role: Joi.string(),
    contact_Number: Joi.string().min(10).max(11),
    email: Joi.string(),
    gender: Joi.string(),
    address: Joi.string(),
    date_Of_birth: Joi.string(),
  })

  return schema.validateAsync({ ...req.body })
    .then((details) => {
      details.password = bcrypt.hash(details.password, 10)
      return details.password;
    })
    .then((details) => {
      const user = {
        user_Id: req.body.user_Id,
        userName: req.body.userName,
        password: details,
        user_role: req.body.user_role,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address,
        date_Of_birth: req.body.date_Of_birth,
        contact_Number: req.body.contact_Number,
      };
      User.create(user)
      return user
    })
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
  const title = req.query.id;
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
          err.message || "Some error occurred while retrieving users."
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

  const schema = Joi.object({

    userName: Joi.string().max(10),
    password: Joi.string(),
    user_role: Joi.string(),
    contact_Number: Joi.string().min(10).max(11),
    email: Joi.string(),
    gender: Joi.string(),
    address: Joi.string(),
    date_Of_birth: Joi.string(),
  })
  return schema.validateAsync({ ...req.body })
    .then((details) => {
      console.log("108", details);
      details.password = bcrypt.hash(details.password, 10)
      return details.password;
    })
    .then((details) => {
      const user = {
        user_Id: req.params.id,
        userName: req.body.userName,
        password: details,
        user_role: req.body.user_role,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address,
        date_Of_birth: req.body.date_Of_birth,
        contact_Number: req.body.contact_Number,
      };
      const id = req.params.id;
      console.log("126", id);
      console.log("127", user);
      User.update(user, {
        where: { user_Id: id }
        //console.log(req.body);
      })
      console.log(user);
      return user;
    })
    .then(details => {
      console.log("136", details);
      if (details) {
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
      console.log("146", err)
      const id = req.params.id;

      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};
/*
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
*/

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