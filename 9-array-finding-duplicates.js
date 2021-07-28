let arr = [2, 4, -7, 13, 5, 7];

function duplicateFinder(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    if (arr[i] + arr[j] == 6) {
      console.log(arr[i] + " " + arr[i + 1]);
      //BUG:::console.log(arr[i] + arr[i + 1])
    }
  }
}

duplicateFinder(arr, 6);
