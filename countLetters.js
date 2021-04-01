const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* This function should take in a sentence (as a string) and then return a count of each of the letters
in that sentence.*/

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }


let countLetters = function(sentence) {
  // declare an accumulator
  let result = {};
// Iterate over the string 
for (const letter of sentence) {
// For every letter
  // use it as a key of my accumulator object
  if (result[letter]) {
// assign the value of 1 to it
      result[letter] += 1;
  } else {
    result[letter] = 1;
  } 
}
// return my accumulator
  console.log(result);
};

countLetters("lighthouse in the house");