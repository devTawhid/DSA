// function fib(n) {

//   let j = 0;

//   if (j === n) {
//     return 0;
//   }

//   j++;
//   return fib(i) + fib(i - 1);
// }

function fib2(n) {
  let f1;
  let f2;
  console.log("star for n-1 fib2(" + n + "- 1)");
  console.log("star for n-2 fib2(" + n + "- 2)");
  if (n <= 1) {
    return n;
  }
  f1 = fib2(n - 1);
  f2 = fib2(n - 2);

  console.log("done for n-1 fib2(" + n + "- 1)" + "=" + f1);
  console.log("done for n-2 fib2(" + n + "- 2)" + "=" + f2);
  return f1 + f2;
}

console.log(fib2(60));
