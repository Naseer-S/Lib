module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define("feedback",{
        feedback_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field:'feedback_id'
        },
        rating: {
            type: DataTypes.INTEGER,
            field:'rating'
        },
        feedback: {
            type: DataTypes.STRING,
            field: 'feedback'
        },
        user_id: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        feedback_date: {
            type: DataTypes.DATE,
            field: 'feedback_date'
        }

    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tablename: 'feedback'
    });
    return feedback;
}