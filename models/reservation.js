module.exports = (sequelize, DataTypes) => {
    const reservation = sequelize.define('reservation',{
        reservation_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field:'reservation_id'
        },
        book_id: {
            type: DataTypes.INTEGER,
            field: 'book_id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        reservation_date: {
            type: DataTypes.DATE,
            field: 'reservation_date'
        }

    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tablename: 'reservation'
    });
    return reservation;
}