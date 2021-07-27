// js way
{
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
}

// using selection sort
{
// let arr = [2, 5, 1, 6, 9, 5, 7, 8,5,4,555,2,5,7,-1,51];

// function selectionSorter(arr) {
//   "use strict";
//   var temp;
//   var highIndex;

//   for (let i = 0; i < arr.length - 1; i++) {      //i=2                                 //i=1                                     // i=0,

//       for(let j = i + 1; j < arr.length; j++) {   //j=3                                 //j=2,3                                   // j=1, 2, 3
//         if(arr[i] < arr[j]) {                     //arr[i]=1(1<2)t                      //arr[i]=2(2<1)f arr[i]=2(2<5)t           // arr[i]=2(2<5)t arr[i]=5(5<1)f 
//                                                                                                                                   // arr[i]=5(5<6)t

//             highIndex = j;                         //highIndex=2                        //highIndex=nan, 4                        // highIndex = 1, nan, 3

//             temp = arr[i];                         // temp = 1                          // temp = nan, 2                          // temp = 2, nan, 5
//             arr[i] = arr[highIndex];               // arr[i] = 2                        // arr[i] = nan, 5                        // arr[i] = 5, nan, 6
//             arr[highIndex] = temp;                 // arr[highIndex] = 1                // arr[highIndex] = nan, 5                // arr[highIndex] = 2, nan, 5
//                                                    // result init[6,5,2,1]              // result init[6,2,1,5],same[6, 2, 1, 5]  // result init[2,5,1,6], [5,2,1,6],
//         }                                          //                                   //             [6,5,1,2]                  //      same[5,2,1,6], [6,2,1,5]
//       }
//   }

//   return arr;
// }


// selectionSorter(arr);
// console.log(arr);
}

// using bubble sort
{
// let arr = [2, 5, 1, 6,56,65,7,1581,15]

// function bubbleSorter(arr) {

//     for(var i = 0; i < arr.length - 1; i++) {         // i=2(2<3)t                         // i=1(1<3)t                                  // i=0 

//         for(var j =0; j < arr.length - i - 1; j++) {  // j=0(0<1) 1(1<1)f                  // j=0(0<2),1(1<2)                            // j=0,1,2(2<3)t,3(3<3)f
            
//             if(arr[j] > arr[j+1]) {                   // arr[j]=1(1>2)f, nan               // arr[j]=2(2>1)t  arr[j]=2(2>5)f             // arr[j]=2(2>5)f arr[j]=5(5>1)t 
//                                                       //                                   //                                            // arr[j]=5(5>6)f

//                 var temp = arr[j];                    // temp=nan,nan                      // temp=2,nan                                 // temp=nan,5,nan
//                 arr[j] = arr[j+1];                    // arr[j]=nan,nan                    // arr[j]=1,nan                               // arr[j]=nan,1,nan
//                 arr[j+1] = temp;                      // arr[j+1]=nan,nan                  // arr[j+1]=2, nan                            // arr[j+1]=nan,5,nan
//             }                                         // result init[1,2,5,6]              // result init[2,1,5,6], [1,2,5,6]            // result init[2,5,1,6], same[2,5,1,6],
//                                                       // nan,nan                           // same[1,2,5,6]                              // [2,1,5,6], same[2,1,5,6]
//         }
//     }
//     return arr;
// }

// var arr2 = bubbleSorter(arr);
// console.log(arr2);
}

// using insertion sort
let arr = [5,4,3,2,1];

function insertionSorter(arr) {

  for(let i = 1; i < arr.length; i++) {    //1 i=3(3<4)t                              //1 i=2                      //1 i=1                   
    let item = arr[i];                     //2 item=5                                 //2 item=6                   //2 item=2                 
    let j;                                 
    j = i - 1;                             //3 j=2                                    //3 j=1                      //3 j=0                    

    console.log("before:arr[i]:" + arr[i] , +":item" + item )

    while(j >= 0 && arr[i] < arr[j]){      //4 (j=2 && 5<6)t (j=1 && 5<4)f            //4 (j=1 && 6<4)f            //4 (j=0 && 2<4)t            
      arr[j+1] = arr[j];                   //5 {arr[j+1]= 6=>[2,4,6,(6)]} {nan}       //5 arr[j+1]= nan=>[2,4,6,5] //5 arr[j+1]= 4=>[4,(4),6,5]    
      j--;                                 //6 j =1, nan                              //6 j =nan                   //6 j = -1                    
                                           //7 while {jump line4} ends                //7 while didn't started     //7 while ends                
    }

    arr[j+1] = item;                       //8 arr[j+1=2]=5                           //8 arr[j+1=0]=nan           //8 arr[j+1=0]=2               
                                           // result [2,4,(5),6]                      // result [2,4,6,5]          // result [(2),4,6,5]                 
  
  
    console.log("after : arr[i]:" + arr[i] , +"item:" + item )
  }

  return arr;
}

let arr2 = insertionSorter(arr);

console.log(arr2)



