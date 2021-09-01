let arr = [1, 2, 3, 4, 5, 6];

function convertToWave(arr, n){
    if(arr.length % 2 === 0){
        for(let i = 0; i < arr.length; i+=2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else if(arr.length % 2 !== 0){
        for(let i = 0; i < arr.length - 1; i += 2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    // console.log(arr);
    return arr;
}

convertToWave(arr);