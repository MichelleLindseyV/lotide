function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
  }
  return true;
};

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



/* iterate over array to find index values
return values in a new array
if array length is even (% 2 === 0) return the middle two values
if arary length is uneven (% 2 !== 0) return the single middle value
if array length === 1 || [] return []
*/

const middle = function(array) {
  let newArr = [];
  if (array.length <= 2) {
    return newArr;
  }
  if (array.length % 2 === 0) {
    const firstIndex = (array.length/2) -1;
    const valueToPush = array[firstIndex];
    const secondIndex = firstIndex + 1;
    const anotherValToPush = array[secondIndex];
    newArr.push(valueToPush, anotherValToPush);

    
  } else {
    const index = Math.floor(array.length/2);
    const pushVal = array[index];
    newArr.push(pushVal);
  }
  return newArr
};

// console.log(middle([1]));
// console.log(middle([1, 2])); 
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);