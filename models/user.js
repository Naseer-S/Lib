//const bcrypt = require("bcrypt")
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      serial: true,
      autoIncrement: true,
      field: 'user_Id'
    },

    userName: {
      type: DataTypes.STRING,
      field: 'userName'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'

    },
    gender: {
      type: DataTypes.STRING,
      field: 'gender'

    },
    date_Of_birth: {
      type: DataTypes.DATE,
      field: 'date_Of_birth'

    },

    user_role: {
      type: DataTypes.STRING,
      field: 'user_role'
    },

    contact_Number: {
      type: DataTypes.STRING,
      field: 'contact_Number'

    },
    email: {
      type: DataTypes.STRING,
      field: 'email'

    },
    address: {
      type: DataTypes.STRING,
      field: 'address'
    }
  });

  User.associate = (models) => {
    User.belongsTo(models.role, {
      foreignKey: "role_Id",
    });

  }
  return User;
};