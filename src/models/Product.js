const Sequelize = require('sequelize');
const db = require('./index.js');

const Products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        default: 0,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
    }
});

module.exports = Products;