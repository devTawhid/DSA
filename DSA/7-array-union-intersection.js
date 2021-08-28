//union and intersection finding
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 8, 9, 10, 12, 34, 45, 67];

function unionFinder(arr, arr2) {
  let i = 0;
  let j = 0;
  let union = [];

  while (i < arr.length || j < arr2.length) {
    if (arr[i] === arr2[j]) {
      union.push(arr[i]);
      i++;
      j++;

      console.log(union);
    } 
    
    else if (arr[i] < arr2[j]) {
      union.push(arr[i]);
      i++;

      console.log(union);

    // if i comment this part why the code don't work ????????????????????????????
    // instead it should show wrong or right answer ATLIST !!!!!!!!!!!!!!!!!!!!!!!
      if (i === arr.length) {
        while (j < arr2.length) {
          union.push(arr2[j]);
          j++;

        }
      }

    } 
    
    else if (arr[i] > arr2[j]) {
      union.push(arr[j]);
      j++;

      console.log(union);

    // if i comment this part why the code don't work ???????????????????????????
      if (j === arr2.length) {
        while (i < arr.length) {
          union.push(arr[i]);
          i++;

        }
      }

    }

  }
  console.log(union);

  return union;
}


let arr3 = unionFinder(arr, arr2);
console.log(arr3);

