'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      about: {
        type: Sequelize.TEXT('long'),
        defaultValue: null
      },
      cgpa: {
        type: Sequelize.DOUBLE
      },
      rollNumber: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.ENUM,
        values: [
          'male',
          'female',
        ],
        defaultValue: 'male'
      },
      verification: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};