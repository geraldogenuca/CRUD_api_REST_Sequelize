//
const 
    Sequelize = require('sequelize')
    db_config = require('../config/db_config')


    //
    Categories = require('../models/CategoriesModels')
    Images = require('../models/CategoriesModels')
    Products = require('../models/CategoriesModels')
    Orders = require('../models/CategoriesModels')
    Users = require('../models/CategoriesModels')
    
    //
    connection_db = new Sequelize(db_config)


//
Categories.init(connection_db)
Images.init(connection_db)
Products.init(connection_db)
Orders.init(connection_db)
Users.init(connection_db)


//
//Categories.associate(connection_db.models)
//Images.associate(connection_db.models)
//Products.associate(connection_db.models)


module.exports = connection_db