function lastIndexOf (array, value) {
  var match = false;
  var location;
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (value === array[arrayIndex]) {
      match = true;
      location = arrayIndex;
    }
  }
  if (match) {
    return location;
  }
  else {
    return -1;
  }
}