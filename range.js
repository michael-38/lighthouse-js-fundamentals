function range (start, end, step) {
  var rangeArray = [];
  if ((start === undefined) || (end === undefined) || (step === undefined) || (start > end) || (step < 0)) {
    rangeArray = [];
  }
  else {
    for (var index = start; index <= end; index+=step){
      rangeArray.push(index);
    }
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));