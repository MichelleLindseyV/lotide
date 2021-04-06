
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


module.exports = middle
