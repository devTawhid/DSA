let arr = [
  [1, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
];

let arr2 = [
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 1],
];

// function rowWithMax1s(arr, n, m) {
//   // code here
//   let count = 0;
//   let countn = 0;
//   let index = 0; 
//   let j = 0; 

//   for (let i = 0; i < n; i++) {
//     count = 0;
      
//     for (j = 0; j < m; j++) {
//         console.log(typeof arr[i][j]);

//       if (arr[i][j] == 1) {
//         count++;
//       }
//       if (j == m - 1){
//         // console.log(count, countn, index);

//         if(countn <= count) {index = i;}
//         countn = Math.max(count, countn);
//       }
//       console.log(index);
//     }
//   }
//   console.log(index);
//   return index;
// }

// // rowWithMax1s(Arr, 4, 4);
// rowWithMax1s(arr2, 6, 2);

// other one

function rowWithMax1(arr, m, n){
    // code here
    let count = 0;
    let countn = 0;
    let index = 0; 

    for(let i = 0; i < n; i++){
        // console.log(count, countn);
        count = 0;

        for(let j = m - 1; 0 <= j; j--){
            // console.log(arr[i][j]);

            if(arr[i][j] == 0 || j == 0){
                if(countn <= count){
                    // console.log(count, countn);
                    index = i;
                    if(arr[i][j] == 1){
                        count++;
                    }
                    countn = count;
                }
                break;
            }
            else if(arr[i][j] == 1){
                count++;
            }
        }
    }
    console.log(index);
    return index;
}

// rowWithMax1(arr2, 6, 2);
rowWithMax1(arr, 4, 4);