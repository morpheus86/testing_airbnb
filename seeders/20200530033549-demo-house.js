"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const houses = [
      {
        host: 1,
        picture:
          "https://content.api.news/v3/images/bin/9bd6b502fd2fa9b16dc10d09cc0feda6",
        type: "Entire house",
        // town: "Ostuni",
        superhost: true,
        title: "Beautiful flat in Ostuni!",
        price: 50.0,
        superhost: true,
        description:
          "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).<br>Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.<br> It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.<br> You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.<br>    Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        wifi: true,
        kitchen: true,
        heating: true,
        freeParking: true,
        entirePlace: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        host: 2,
        picture:
          "https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg",
        type: "Entire house",
        // town: "Isla Mujeres",
        title: "The World Famous Seashell House ~ Casa Caracol",
        price: 50.0,
        superhost: false,
        description:
          "An incredible house which mirror amazing and look toward a view to kill for",
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        wifi: true,
        kitchen: true,
        heating: true,
        freeParking: true,
        entirePlace: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        host: 1,
        picture:
          "https://assets.themortgagereports.com/wp-content/uploads/2017/12/How-to-Buy-a-House-with-Low-Income-This-Year.jpg",
        type: "Entire house",
        // town: "Mujeres",
        title: "The World Famous House ~ Caracol",
        price: 100,
        superhost: false,
        description:
          "An incredible house which mirror amazing and look toward a view to kill for",
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        wifi: true,
        kitchen: true,
        heating: true,
        freeParking: true,
        entirePlace: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return await queryInterface.bulkInsert("Houses", houses);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Houses", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
        return await
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
