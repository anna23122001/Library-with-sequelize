'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Athor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Athor.init({
    full_name: DataTypes.STRING,
    email: DataTypes.TEXT,
    nationality_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Athor',
  });
  return Athor;
};