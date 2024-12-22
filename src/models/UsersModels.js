
const {Model, DataTypes} = require('sequelize')


class Products extends Model {
    static init(sequelize) {
        super.init({
            id_product: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            id_category: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name_product: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            price_product: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            description_products: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: Date.now(),
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: Date.now(),
                allowNull: false,
            },
        }, {
            tableName: 'products',
            timestamp: true,
            sequelize 
        })
    }
}


module.exports = Products