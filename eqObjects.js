function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/* function will take in two objects and return true or false based on a perfect match.
In this scenario, two objects are equal when:
1. They have the same number of keys
2. The value for each key in one object is the same as the value for that same key
in the other object.
*/

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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false