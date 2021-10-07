const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    userId: DataTypes.STRING(24),
    email: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  const OrderItem = sequelize.define("OrderItem", {
    sku: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  });
  // define the relationship between two tables
  Order.hasMany(OrderItem);
  OrderItem.belongsTo(Order, {
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false,
    },
  });

  // sync all into database
  sequelize.sync();
};