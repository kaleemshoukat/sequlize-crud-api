'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
        as: "posts",
      })
    }

    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.TEXT,
    about: DataTypes.TEXT('long'),
    cgpa: DataTypes.DOUBLE,
    rollNumber: DataTypes.INTEGER,
    dob: DataTypes.DATEONLY,
    gender: DataTypes.ENUM,
    verification: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};