// Use as a reference:

// function eqArrays(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//   }
//   return true;
// };


// function assertArraysEqual(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//   console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };





const eqObjects = function(object1, object2) {
  //check if same number of keys
  let firstLength = Object.keys(object1).length;
  let secondLength = Object.keys(object2).length;

  if (firstLength !== secondLength) {
    return false;
  }
    //is value of specified key in object1 === specifed key in object2
    for (let key in object1) {
      if (object1[key] === object2[key]){
      return true;
    } else if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key])
    } 
  }
  return false;
};

/*this function will take in two objects and console.log an appropriate message to the console */

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false