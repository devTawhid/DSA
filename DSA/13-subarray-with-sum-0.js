// import { sum } from "./basics/js-basics/ES6/webpack4-demo/src/scripts/math";

let arr3 = [4, 2, 1, 6];
let arr2 = [4, 2, -3, 1, 6];
let arr = [1, 2, 3, 1, 6];
        //   [1, 3, 1, 2, 8]
let arr4 = [10, -10];

function subArray(arr){
    let map = new Map();
    let j = 0;

    for(let i in arr){
        j += arr[i];
        // !map.has(i) ? map.add(i,1) : return "Yes";
        if(!map.has(j)){
            map.set(j,1);
            console.log(map);
            if(map.has(0)) return "Yes";
            // return map.has(0) ? "No" : "Yes"; 
        }
        else return "Yes";
    }
    return "No";
}

// let val = subArray(arr3);
// console.log(val);

// const accumulate = arr => arr.map((sum => value => sum += value)(0));
// console.log(accumulate(arr));
// Math.sum(arr3);


function accumulate(arr) {
    arr.map()
}