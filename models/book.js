module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    book_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      serial: true,
      field: 'book_Id'
    },

    unique_Id: {
      type: DataTypes.STRING,
      field: 'unique_Id'

    },
    book_Title: {
      type: DataTypes.STRING,
      field: 'book_Title'
    },
    author: {
      type: DataTypes.STRING,
      field: 'author'

    },
    publication_Year: {
      type: DataTypes.STRING,
      field: 'publication_Year'

    },
    no_Of_Copies: {
      type: DataTypes.INTEGER,
      field: 'no_Of_copies'
    },
  },
    /* {
       createdAt: 'created_at',
       updatedAt: 'updated_at',
       tablename: 'book'
     } */
  );
  return Book;
};