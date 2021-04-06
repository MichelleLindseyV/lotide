
/*Implement a function that takes in two arrays and returns true or false
based on a perfect match */

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
  }
  return true;
};

module.exports = eqArrays





  
