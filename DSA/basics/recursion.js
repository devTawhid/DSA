// finding factorial

function factorial(n) {
  let f;
  console.log("calc for f(" + n + ")");

  if (n === 0) {
    return 1;
  }

  f = n * factorial(n - 1);
  console.log("done for f(" + n + ")" + "=" + f);
  return f;
}

let fac = factorial(300);
console.log(fac);
