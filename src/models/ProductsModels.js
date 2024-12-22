
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
                foreignKey: true, 
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
        }, {
            tableName: 'products',
            timestamp: true,
            createdAt: 'updateTimestamp',
            updatedAt: 'updateTimestamp',
            sequelize 
        },)
    }
}


Products.associate = models => {
    Products.hasMany(models.Categories, {
        foreignKey: 'id_category',
        sourceKey: 'id_category'
    })
}

Products.associate = models => {
    Products.belongsToMany(models.Images, {
        through: 'ImagesProducts',
        foreignKey: 'id_product'
    })
}

Products.associate = models => {
    Products.belongsToMany(models.Orders, {
        through: 'OrdersProducts',
        foreignKey: 'id_product'
    })
}


module.exports = Products   