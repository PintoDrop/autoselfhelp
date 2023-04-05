const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // POST NEEDS TO STORE: SUBJECT, DESCRIPTION, YEAR, MAKE, MODEL
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject:{
      type: DataTypes.STRING,
      allowNull: false,
     },
     description: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     year: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },
     make: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     model: {
      type: DataTypes.STRING,
      allowNull: false,
     },
  },
  {
    sequelize
  }
);

module.exports = Post;