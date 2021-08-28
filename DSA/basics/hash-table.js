// class HashTable {

//     table = new Array(100);

//     hashStringToInt = (key, tableSize) => {

//         key.charCodeAt(0)
//     };

//     setItem = (key, value) => {
//         const idx = this.hashStringToInt(key, this.table.length);
//         this.table[idx] = value;
//     };

//     getItem = (key) => {
//         const idx = this.hashStringToInt(key);
//         return this.table[idx];
//     };
// }

// let Person = new HashTable();

// Person.setItem("firstName", "tawhid");
// Person.setItem("lastName", "sultanul");

// console.log(Person.getItem("firstName"));
// console.log(Person.getItem("lastName"));


// let arr = [1,2,4,5,4,5,6];

// function findFirst(arr) {
//     let obj = {};

//     for(let number of arr){
//         if(!obj[number]){
//             obj[number] = 1;
//         }else{
//             obj[number]++;
//         }
//     }

//     for(let key in arr){
//         if(obj[key] > 1){
//             console.log(key);
//             break;
//         }
//     }
// }

// // let obj2 = findFirst(arr);
// // console.log(obj2);

// function findFirst_better(arr){
//     let pastarr = [];

//     for(let i of arr) {
//         if(!pastarr.includes(i)){
//             pastarr.push(i);
//             console.log(pastarr);
//         }
//         else{
//             return i;
//         }
//     }
//     console.log(pastarr);
//     return -1;
// }

// let dup = findFirst_better(arr);
// console.log(dup);


///find first non reapeting element in an array

// function findFirst(arr){
//     let obj = {};

//     for(let i in arr){
//         if(!obj[arr[i]]) {
//             obj[arr[i]] = 1;
//         }else{
//             obj[arr[i]]++;
//         }
//     }

//     for(let i of obj){

//     }

//     return obj;
// }

// let arr = [1,1,1,2,8,5,4,1];

// let obj = findFirst(arr);

// console.log(obj);


// function firstNonRepeating(arr,n = 5){
//     //code here
//     let obj = {};

//     for(let i of arr){
//         if(!obj[i]){
//             obj[i] = 1;
//         }else{
//             obj[i]++;
//         }
//     }

//     for(let key of Object.keys(obj)){
//         if(obj[key] === 1){
//             // console.log(typeof(obj[key]) + " " + obj[key] + " " + key);
//             return key;
//         }
//     }
// }

let arr = [-1, 19, 2, 3];
// let m = firstNonRepeating(arr);
// console.log(m);


// another way

function firstNonRepeating(arr,n = 5){
    //code here
    let pastarr = [];

    for(let i of arr) {
        if(!pastarr.includes(i)){
            pastarr.push(i);
            console.log(pastarr);
        }
        else{
            return i;
        }
    }
    
    return pastarr[0];
}

let a = firstNonRepeating(arr);
console.log(a);