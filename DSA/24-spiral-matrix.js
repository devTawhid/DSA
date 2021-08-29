let arr = [
    [1,  2,  3,  4],// (0,i)
    [5,  6,  7,  8],// (1,i)
    [9,  10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
// (i,0)   
];


function spiralArr(arr){
    let cs = 0;             // start of column
    let rs = 0;             // start of row
    let ce = arr[0].length; // end of column
    let re = arr.length     // end of row

    while(cs < ce && rs < re){

        for(let i = cs; i < ce; i++){
            console.log(arr[cs][i]);
        } cs++;

        for(let i = cs; i < re; i++){
            console.log(arr[i][ce - 1]);
        } ce--;

        if(cs < ce){
            for(let i = ce - 1; i >= rs; i--){
                console.log(arr[re - 1][i]);
            } re--;
        }

        if(rs < re){
            for(let i = ce; i >= cs; i--){
                console.log(arr[i][rs]);
            } rs++;
        }
    }
}

spiralArr(arr);