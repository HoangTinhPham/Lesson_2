/*
Đầu vào là một mảng số, ví dụ: arr = [1, -2, 3, 4, -9, 6].

Nhiệm vụ là: tìm mảng con liền kề của arr với tổng các item lớn nhất.

Viết hàm getMaxSubSum(arr) sẽ trả về tổng đó.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }

console.log(getMaxSubSum([1,2,-5,-9]));