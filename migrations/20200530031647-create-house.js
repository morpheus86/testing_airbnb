'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      host: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      superhost: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      guests: {
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      beds: {
        type: Sequelize.INTEGER
      },
      baths: {
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        type: Sequelize.BOOLEAN
      },
      heating: {
        type: Sequelize.BOOLEAN
      },
      freeParking: {
        type: Sequelize.BOOLEAN
      },
      entirePlace: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Houses');
  }
};