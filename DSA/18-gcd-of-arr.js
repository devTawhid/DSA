let arr2 = [25, 60, 90, 50];
let arr = [10, 15];

function GCDfinder(a, b){
    if(a % b == 0) return b;
    return GCDfinder(b, a % b);
}

let val = GCDfinder(60, 90);
// console.log(val);

function GCDfinderOfArray(arr, start, end){
    let result = arr[start]; 

    for(let i = start + 1; i <= end; i++) {
        result = GCDfinder(result, arr[i]);
    }
    console.log(result);
}

GCDfinderOfArray(arr2, 1, 2);