// //O(n^2)
// let arr = [0, 8, 3, 1, 2];
let arr = [1, 2, 3,];

// let max_sum = function (a){
//     let max = 0;

//     for(let j = 0; j < a.length; j++) {
//         let temp = a[0];

//         for(let i = 0; i < a.length - 1; i++) {
//             a[i] = a[i + 1];
//             // console.log(i, a[i]);
//         }
//         a[a.length - 1] = temp;
//         let maxVal = 0;

//         for(let i in a){
//             maxVal = maxVal + parseInt(a[i]) * parseInt(i);
//         }

//         if(max <= maxVal){
//             max = maxVal;
//         }
//         // console.log(a, maxVal, max);
//     }

//     console.log(max);
// }

// max_sum(arr);

// optimized solution
function max_sum_optimized(arr){
    let sum = 0;
    let s0 = 0;
    let max = 0;
    let temp = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        s0 = s0 + i * arr[i];
        // console.log(sum, s0);
    }
    max = s0;  
    for(let i = 0; i < arr.length; i++){
        let val = arr.length * arr[arr.length - 1 - i];
        temp = s0 + sum - val;
        console.log(s0);
        if(max < temp) max = temp;
        s0 = temp;
        console.log(sum, max);
    }
}

max_sum_optimized(arr);