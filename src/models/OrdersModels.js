
const {Model, DataTypes} = require('sequelize')


class Orders extends Model {
    static init(sequelize) {
        super.init({
            id_order: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            id_product: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true,
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


Orders.associate = models => {
    Orders.hasMany(models.Products, {
        foreignKey: 'id_product',
        sourceKey: 'id_product'
    })
}


module.exports = Orders