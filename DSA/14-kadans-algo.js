let arr = [1, 2, 3, -7, 5];
let arr2 = [-1, -2, -3, -4];

function maxSubarraySum(arr){
    let sum = 0;
    //this part
    let sumf = arr[0];

    for(let i in arr){
        sum += arr[i];
        // this part is copied from the solution
        sumf = Math.max(sumf, sum);
        //
        console.log(Math.max(sum));
        if(sum < 0) sum = 0;
    }
    console.log(sumf);
    // this part
    return sumf;
}

maxSubarraySum(arr2);