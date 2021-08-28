function QuickSort(arr, s = 0, e = arr.length - 1) {
    if (s < e) {
        let p = Partition(arr, s, e);
        QuickSort(arr, s, p - 1); 
        QuickSort(arr, p + 1, e);
    }
    
    function Partition(arr, s, e) {       
        let pivot = arr[e];               
        let pIndex = s;                   
    
        for(let i = s; i < e; i++) {      
            if(arr[i] <= pivot) {         
                let temp = arr[i]; 
                arr[i] = arr[pIndex]; 
                arr[pIndex] = temp; 
                                          
                pIndex++;                 
            }
        }
    
        let temp2 = arr[e];
        arr[e] = arr[pIndex];
        arr[pIndex] = temp2;
    
        return pIndex;
    }

}

let arr2 = [7, 9, 3, 2, 6, 5, 8];
let arr = [13,19,9,5,12,8,7,4,21,2,6,11];

QuickSort(arr);
console.log(arr);