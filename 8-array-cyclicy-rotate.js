let arr = [1, 2, 3, 4, 5, 10, 15];

function cyclicallyRotator(arr) {
  let val = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = val;

  return arr;
}

let arr2 = cyclicallyRotator(arr);
console.log(arr2);
