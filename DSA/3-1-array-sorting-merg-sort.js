let arr = [9, 7, 3, 6, 2];

function mergeSort(arr, s, e){
    let mid;

    if(s < e){
        mid = Math.floor((s + e) / 2);
        mergeSort(arr, s, mid);
        mergeSort(arr, mid + 1, e);      
        merge(arr, s, mid, e);
    }
}

function merge(arr, s, mid, e){
    let i = s;
    let j = mid + 1;
    let k = s;
    let temp = new Array();

    while(i <= mid && j <= e) {   
        if(arr[i] <= arr[j]){
            temp[k] = arr[i];
            i++;
            k++;
        }
        else{
            temp[k] = arr[j];
            j++;
            k++;
        }
    }
    if(i < mid && j > e) {   
        while(i < mid){
            temp[k] = arr[i];
            i++;
            k++;
        }
    }
    if(i > mid && j < e) {
        while(j < e){
            temp[k] = arr[j];
            j++;
            k++;
        }
    }

    console.log(temp);

    for(let l = s; l < e; l++){
        arr[l] = temp[l];
    }
}

mergeSort(arr,0,4);
console.log(arr)
