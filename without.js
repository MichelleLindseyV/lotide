//eqArray function:
function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
  }
  return true;
};


//assertArraysEqual function:
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/*Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. 
It should return a new array with only those elements from source that are not present in the 
itemsToRemove array.*/

/*iterate over the array
determine if source !== itemsToRemove
if source !== itemsToRemove, return source in new array*/
  


function without(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        newArr.push(source[i]);
      }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);



