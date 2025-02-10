const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { tableName: "users", timestamps: false }
);

module.exports = { User };
