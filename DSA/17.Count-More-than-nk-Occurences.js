let arr = [3, 1, 2, 2, 1, 2, 3, 3];
let arr2 = [2,3,3,2];

function countOccurence(arr, n, k) {
  let m1 = {};
  let result = 0;
  let dividor = n / k;

  for (let i in arr) {
    if (!m1[arr[i]]) {
      m1[arr[i]] = 1;
    } else {
      m1[arr[i]]++;
    }
  }
  
  for (let i in m1) {
    if (m1[i] > dividor) {
      result++;
    }
  }

  return result;
}

countOccurence(arr2, 4, 3);
