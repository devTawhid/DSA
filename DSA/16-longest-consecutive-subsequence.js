// 1. Create an empty hash.
// 2. Insert all array elements to hash.

// 3. Do following for every element arr[i].
// 4. Check if this element is the starting point of a subsequence. To     do thischeck this, simply look for arr[i] – 1 in the hash, if not found, then this is the first element of a subsequence.
// 5. If this element is the first element, then count the number of consecutive elements present in the hash starting with this element. Iterate from arr[i] + 1 till the last element that can be found.
// 6. If the count is more than the previous longest subsequence found, then update it.

let arr = [2,6,1,9,4,5,3];

function findLongestConseqSubseq(arr){
    let s1 = new Set(arr);
    // console.log(typeof s1[1]);
    let ans = 0;

    for(let i in arr){
        let m = s1.has(arr[i] - 1);
        if(m == 0){
            let j = arr[i];

            while( s1.has(j) ){
                j++;

                if(ans < j - arr[i]){
                    ans = j - arr[i];
                }
            }
        }
    }
    return ans;
}

let val = findLongestConseqSubseq(arr);
console.log(val);