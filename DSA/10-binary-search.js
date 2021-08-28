let arr = [1,2,3,4,5,5,5,5,5,6,7,8,9];

function BS(arr, value, s, e){            
    let mid = Math.floor((s + e) / 2);      

    if(value === arr[mid]){
        let p = mid - 1;

        for(let i = mid; i < e; i++) {
            if(value === arr[i]){
                p++;
            }else{
                break;
            }
        }   
        console.log("Found at index:" + p + " Searched value:" + value);
    }
    else if(value < arr[mid]){                 
        BS(arr, value, s, mid);           
    }
    else if(value > arr[mid]){                   
        BS(arr, value, mid + 1, e);       
    }
    else{
        console.log("Not found");
    }
}

BS(arr, 5, 0, 12);