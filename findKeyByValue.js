const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*Function should take an object and value.
It should scan the object and return the first key which 
contains the given value. If no key with that given value is found,
then it should return undefined */

const findKeyByValue = function(bestTVShowsByGenre, value) {
  let genreKeys = (Object.keys(bestTVShowsByGenre));
    for (genre of genreKeys) {
      if (bestTVShowsByGenre[genre] == value) {
        return genre
      }
    }
};

//Test assertions
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");