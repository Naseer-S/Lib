module.exports = (sequelize, DataTypes) => {
    const publication_book_mapping = sequelize.define('publication_book_mapping',{
        publication_book_mapping_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field:'publication_book_mapping_id'
        },
        publication_id: {
            type: DataTypes.INTEGER,
            field: 'publication_id'
        },
        book_id: {
            type: DataTypes.INTEGER,
            field: 'book_id'
        }

    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tablename: 'publication_book_mapping'
    });
    return publication_book_mapping;
}