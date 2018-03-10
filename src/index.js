const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./starwars-names.json");

const random = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
