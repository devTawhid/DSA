// Find the largest three distinct elements in an array
let arr = [10, 4, 3, 50, 23, 90];

let first = -Infinity, second = -Infinity, third = -Infinity;


function wrapper(){
    for(let i of arr){
        if(i > first){
            third = second;
            second = first;
            first = i;     
        }
        console.log(first, second, third);
        if(i > second){  
            third = second;
            second = i;
        }
        console.log(first, second, third);
        if(i > third){ 
            third = i;
        }
        // console.log(first, second, third);
    }    
}

function wrapperA(){
    for(let i of arr){
        if(i > first){
            third = second; 
            second = first;
            first = i;
            console.log(first, second, third);
        }
        else if(i > second){  
            third = second;
            second = i;
            console.log(first, second, third);
        }
        else if(i > third){ 
            third = i;
            console.log(first, second, third);
        }
    }
    
}

wrapperA();

// console.log(first, second, third);