function insertAtIndex(arr, index, value) {
  if (index < 0 || index > arr.length) {
    return arr; // invalid index: do nothing
  }
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

console.log(insertAtIndex([10, 20, 40, 50], 2, 30)); // [10, 20, 30, 40, 50]