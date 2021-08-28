//quick sort

function quickSort(arr, fun, s = 0, e = arr.length - 1,) {
    if(s < e){
        p = partition(arr, fun, s, e);
        quickSort(arr, fun, s, p - 1);
        quickSort(arr, fun, p + 1, e);
    }

    function partition(arr, fun, s = 0, e = arr.length - 1) {
        let pIndex = s;
    
        for (let i = s; i < e; i++) {
            if(fun(arr[i], arr[e])) {
    
                let temp = arr[i]; 
                arr[i] = arr[pIndex]; 
                arr[pIndex] = temp; 
    
                pIndex++;
            }
        }
    
        let temp = arr[e]; 
        arr[e] = arr[pIndex]; 
        arr[pIndex] = temp; 
    
        return pIndex;
    }
}



function fun(a, b) {
    m = a > b;
    return m;
}

let arr = [9, 7, 3, 6, 2];

// using arrow function
quickSort(arr, (a, b) => a > b);

console.log(arr);

quickSort(arr, (a, b) => a < b);

console.log(arr);