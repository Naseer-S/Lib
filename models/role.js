module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("role", {
      role_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'role_Id'
      },
      role_Name: {
        type: DataTypes.STRING,
        field:'role_Name'
      }
    });
    return Role;
  };