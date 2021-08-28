// using bubble sort
let arr = [2, 1, 5, 6, 959, 56, 78, -12, -98];

function bubbleSortKthSmallestValue(arr, k) {
  let index;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  index = k < arr.length ? arr[k - 1] : null;

  return index;
}

var index = bubbleSortKthSmallestValue(arr, 2);
console.log(index);

stroke()