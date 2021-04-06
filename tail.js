
const tail = function(actual) {
  if (actual.length > 1) {
    return actual.slice(1);
  } else {
    return [];
  }
};

module.exports = tail