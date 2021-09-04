let arr = [2, 3, 7, 10, 12];
let arr2 = [1, 5, 7, 8];

function max_path_sum(arr, arr2, M, N){
    let i = 0, j = 0, res = 0, res2 = 0;
    let m = arr.length - 1;
    let n = arr2.length - 1;

    while(i < m && j < n){
        if(arr[i] > arr2[j]) {
            j++;
        }        
        else if(arr[i] < arr2[j]) {
            i++;
        }
        else if(arr[i] === arr2[j]) {
            res = i;
            res2 = j;
            break;
        }
    }

    // console.log(res, res2);
    // finding the sum before and after res'th and res1'th and also after 
    let FsumBefore = 0, SsumBefore = 0;
    let FsumAfter = arr[res + 1], SsumAfter = arr2[res2 + 1];

    for(let k = 0; k < res; k++){
        FsumBefore = FsumBefore + arr[k];
    }
    for(let k = res + 2; k <= m; k++){
        FsumAfter = FsumAfter + arr[k];
    }

    for(let k = 0; k < res2; k++){
        SsumBefore = SsumBefore + arr2[k];
    }
    for(let k = res2 + 2; k < m; k++){
        SsumAfter = SsumAfter + arr2[k];
    }

    // console.log(FsumBefore, FsumAfter, SsumBefore, SsumAfter);
    // console.log(Math.max(FsumAfter, SsumAfter) + arr[res] + Math.max(SsumBefore, FsumBefore));
    return Math.max(FsumAfter, SsumAfter) + arr[res] + Math.max(SsumBefore, FsumBefore);
}

max_path_sum(arr, arr2, 10, 5);