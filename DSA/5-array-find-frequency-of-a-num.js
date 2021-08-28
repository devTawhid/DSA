let arr = [0, 5, 5, 5, 4];

function freqFinder(arr, k) {
  var counter = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      counter++;
    }
  }

  return counter;
}

var counter = freqFinder(arr, 9);
console.log(counter);
