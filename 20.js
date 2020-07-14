// 快排
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mIndex = Math.floor(arr.length - 1);
  let mItem = arr.splice(mIndex, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mItem) {
      left.push(arr[i])
    } else if (arr[i] > mItem) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([mItem]).concat(quickSort(right));
}

console.log(quickSort([3, 2, 6, 3, 7, 1]))

