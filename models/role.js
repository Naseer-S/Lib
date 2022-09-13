module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("role", {
    role_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      serial: true,
      field: 'role_Id'
    },
    role_Name: {
      type: DataTypes.STRING,
      field: 'role_Name'
    },

    /*fk_user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'fk_user_id'
    }*/
  });

  return Role;
};