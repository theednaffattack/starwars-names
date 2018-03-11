const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./starwars-names.json");
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < numer; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
