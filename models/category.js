module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
      category_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'category_id'
      },
      category_Name: {
        type: DataTypes.STRING,
        field: 'category_Name'
      },
    },
      {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tablename: 'book'
    }
    );
    return Category;
  };