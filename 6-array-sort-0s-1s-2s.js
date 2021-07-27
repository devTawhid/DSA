//segrate 0s and 1s in an array
/*
let arr = [0, 1, 0];

function zeroOneSorter(arr) {
  let zeroCount = 0;
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    arr2.push(0);
  }

  for (let i = 0; i < arr.length - zeroCount; i++) {
    arr2.push(1);
  }
  console.log(zeroCount);
  return arr2;
}

let arr2 = zeroOneSorter(arr);
console.log(arr2);
*/
//Now for 0 1 and 2

let arr = [
  0, 1, 2, 0, 2, 1, 2, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 2,
  1, 0, 2,
];

function zeroOneTwoSorter(arr) {
  let zeroCount = 0;
  let oneCount = 0;
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
    if (arr[i] === 1) {
      oneCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    arr2.push(0);
  }

  for (let i = 0; i < oneCount; i++) {
    arr2.push(1);
  }

  for (let i = 0; i < arr.length - zeroCount - oneCount; i++) {
    arr2.push(2);
  }

  return arr2;
}

let arr2 = zeroOneTwoSorter(arr);
console.log(arr2);
