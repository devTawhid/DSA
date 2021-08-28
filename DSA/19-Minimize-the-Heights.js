function getMinDiff(k, arr){
    let minn = Number.MAX_SAFE_INTEGER;
    let maxx = Number.MIN_VALUE;

    for(let i in arr){
        if(arr[i] - k > 0){

            arr[i] = arr[i] - k;
            if(arr[i] <= minn) minn = arr[i];
            if(arr[i] >= maxx) maxx = arr[i];

        }else{

            arr[i] = arr[i] + k;
            if(arr[i] <= minn) minn = arr[i];
            if(arr[i] >= maxx) maxx = arr[i];

        }
    }
    console.log(arr);
    return maxx - minn;
}

getMinDiff(5, [2, 6, 3, 4, 7, 2, 10, 3, 2, 1])
