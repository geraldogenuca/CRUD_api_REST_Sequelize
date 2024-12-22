const {Model, DataTypes} = require('sequelize')


class Categories extends Model {
    static init(sequelize) {
        super.init({
            id_category: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name_category: {
                type: DataTypes.STRING(100),
                allowNull: false,
            }
        }, {
            tableName: 'users',
            timestamp: false,
            sequelize 
        })
    }
}


Categories.associate = models => {
    Categories.belongsToMany(models.Products, {
        through: 'CategoriesProducts',
        foreignKey: 'id_categories'
    })
}


module.exports = Categories