// 二分查找
const binarySearch = (target, arr) => {
  if (!arr.length) return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1
}


var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
console.log(binarySearch(87, arr))



