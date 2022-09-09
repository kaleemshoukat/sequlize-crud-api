'use strict';

const data=[
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
    password: '12345678',
    cgpa: 3.2,
    rollNumber: 12,
    dob: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'John1',
    lastName: 'Doe1',
    email: 'example1@example.com',
    password: '12345678',
    cgpa: 3.2,
    rollNumber: 12,
    dob: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'John2',
    lastName: 'Doe2',
    email: 'example2@example.com',
    password: '12345678',
    cgpa: 3.2,
    rollNumber: 12,
    dob: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    return queryInterface.bulkInsert('Users', data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
