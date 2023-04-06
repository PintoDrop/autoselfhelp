const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reply extends Model {

}

Reply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reply: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
   {
  sequalize,
  }
);

module.exports = Reply;