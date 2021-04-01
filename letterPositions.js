function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
  }
  return true;
};



// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
    if (letter === ' '){
      continue
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i]
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
