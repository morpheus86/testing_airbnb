"use strict";
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    "house",
    {
      host: DataTypes.STRING,
      picture: DataTypes.STRING,
      type: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      superhost: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
      guests: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      beds: DataTypes.INTEGER,
      baths: DataTypes.INTEGER,
      wifi: DataTypes.BOOLEAN,
      kitchen: DataTypes.BOOLEAN,
      heating: DataTypes.BOOLEAN,
      freeParking: DataTypes.BOOLEAN,
      entirePlace: DataTypes.BOOLEAN,
    },
    {}
  );
  House.associate = function (models) {
    // associations can be defined here
  };
  return House;
};
