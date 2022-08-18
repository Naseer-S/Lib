module.exports = (sequelize, DataTypes) => {
    const user_role_mapping = sequelize.define('user_role_mapping',{
        user_role_mapping_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field:'user_role_mapping_id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        role_id: {
            type: DataTypes.INTEGER,
            field: 'role_id'
        }

    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tablename: 'user_role_mapping'
    });
    return user_role_mapping;
}