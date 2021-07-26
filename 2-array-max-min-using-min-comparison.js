// first min max without in js way
/*
let arr = [1, 2, 5, 0, 54, 12, 99];

var Max = arr.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(Max);
*/

// doing logically(using least number of comparisons)

let arr = [1, 2, 5, -9990, 54, 12, 99, 1900, 0, -99];
let ComparisonCount = 0;

function MaxFinderInArray(arr) {
  var temp = arr[0];

  for (
    var i = 1 /*if i use 0 here then it will only increase the ComparisonCount by 1 */;
    i < arr.length;
    i++
  ) {
    ComparisonCount++; // if I  put the comparison here then it will show me the whole comparison count
    if (temp < arr[i]) {
      temp = arr[i];
      //   ComparisonCount++;//if i put the variable here then it will show me only how much if operation occured
    }
  }
  return temp;
}

function MinFinderInArray(arr) {
  temp = arr[0];

  for (var i = 1; i < arr.length; i++) {
    // ComparisonCount++;

    if (temp > arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

// var Max = MaxFinderInArray(arr);
// console.log(Max);
// console.log(ComparisonCount);

var Min = MinFinderInArray(arr);
console.log(Min);
console.log(ComparisonCount);

// I've managed to do this using (n-1) comparisons
