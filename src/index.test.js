const expect = require("chai").expect;
const starWars = require("./index");

describe("starwars-names", function() {
  describe("all", function() {
    it("should be an array of strings", function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });
    it("should contain `Luke Skywalker`", function() {
      expect(starWars.all).to.include("Luke Skywalker");
    });
  });
  describe("random", function() {
    it("shoud return a random item from the star wars array", function() {
      const randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});
