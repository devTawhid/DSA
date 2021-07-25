// js way
// let arr = [3, 6, 3, 12, 9, 0];

// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(arr);

// using selection sort
let arr = [2, 5, 1, 6, 9, 5, 7, 8,5,4,555,2,5,7,-1,51];

function selectionSorter(arr) {
  "use strict";
  var temp;
  var highIndex;

  for (let i = 0; i < arr.length - 1; i++) {      //i=2                                    //i=1                                    // i=0,

      for(let j = i + 1; j < arr.length; j++) {   //j=3                                 //j=2,3                                 // j=1, 2, 3
        if(arr[i] < arr[j]) {                     //arr[i]=1(1<2)t                       //arr[i]=2(2<1)f arr[i]=2(2<5)t         // arr[i]=2(2<5)t arr[i]=5(5<1)f arr[i]=5(5<6)t
            highIndex = j;                        //highIndex=2                          //highIndex=nan, 4                      // highIndex = 1, nan, 3

            temp = arr[i];                         // temp = 1                            // temp = nan, 2                          // temp = 2, nan, 5
            arr[i] = arr[highIndex];               // arr[i] = 2                          // arr[i] = nan, 5                       // arr[i] = 5, nan, 6
            arr[highIndex] = temp;                 // arr[highIndex] = 1                   // arr[highIndex] = nan, 5                // arr[highIndex] = 2, nan, 5
                                                   // result init[6,5,2,1]                  // result init[6,2,1,5],same[6, 2, 1, 5]  // result init[2,5,1,6], [5,2,1,6], same[5,2,1,6], [6,2,1,5]
        }                                          //                                       //             [6,5,1,2]
      }
  }

  return arr;
}


selectionSorter(arr);
console.log(arr);