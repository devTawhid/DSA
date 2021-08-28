let N = 7;

function factorial(N){
    let m = 1;
    for(let i = 1; i <= N; i++){
        m = m * i;
    }
    return m;
}

let m = factorial(N);
console.log(m)