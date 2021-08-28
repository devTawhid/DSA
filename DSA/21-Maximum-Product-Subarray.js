// function maxProduct(arr){
//     let Max = arr[0];
//     let Min = arr[0];
//     let curMax, curMin, product = 1;

//     for(let i = 0; i < arr.length; i++){
//         product *= arr[i];

//         if(product < 0 && arr[i] > 0) {
//             curMin = arr[i] * product;
//             // console.log(arr[i], curMin);
//         }

//         else if(product > 0 && arr[i] > 0) {
//             curMax = arr[i] * product;
//             // console.log(arr[i], curMax);
//         }

//         else if(arr[i] == 0 && i != arr.length - 1){
//             curMin = arr[i+1];
//             curMax = arr[i+1];
//             console.log(arr[i], curMin, curMax);
//         }

//     }
// }
let arr = [6, -3, -10, 0, 2];

function maxProduct(arr) {
  let curMin = arr[0];
  let curMax = arr[0];
  let maxProduct = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp = curMin;
      curMin = curMax;
      curMax = temp;
    }

    curMax = Math.max(arr[i], arr[i] * curMax);
    curMin = Math.min(arr[i], arr[i] * curMin);

    maxProduct = Math.max(curMax, maxProduct);
  }

  console.log(maxProduct);
}

maxProduct(arr);
