
const {Model, DataTypes} = require('sequelize')


class Images extends Model {
    static init(sequelize) {
        super.init({
            id_image: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            id_product: {
                type: DataTypes.STRING(150),
                allowNull: false,
                foreignKey: true,
            },
            path_image: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }, {
            tableName: 'images',
            timestamp: false,
            sequelize 
        })
    }
}


Images.associate = models => {
    Images.hasMany(models.Products, {
        foreignKey: 'id_product',
        sourceKey: 'id_product'
    })
}


module.exports = Images