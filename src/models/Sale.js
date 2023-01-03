const Sequelize = require('sequelize');
const db = require('./index.js');
const Product = require('./Product.js');
const User = require('./User.js');

const Sales = db.define('sales', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
    },
});

Sales.belongsTo(Product, { foreignKey: 'productId' });
Sales.belongsTo(User, { foreignKey: 'userId' });

module.exports = Sales;
