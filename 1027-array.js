// Array 實作
let arr = [1, 2, 3, 4, 5];

// function ArrayHi(index, value) {
//   this.index = index === undefined ? 0 : index;
//   this.value = value === undefined ? null : value;
// }

function getPosition(value) {
  let position = 0;
  while (position < arr.length) {
    if (arr[position] === value) {
      break;
    }
    position++;
  }
  // 確認 value 存不存在
  if (arr[position] !== value) {
    return false;
  }
  return position;
}

function arrayInsertAfterValue(value, newValue) {
  console.log("Before: ", arr);

  // 1. 找到 value 的位置(index)，找不到則回覆原本的 arr
  let position = getPosition(value);
  if (!position) {
    return arr;
  }

  // 2. 新增 newValue ，並將其他數值往後搬
  let last = arr.length;
  for (let i = last; i > position; i--) {
    arr[i + 1] = arr[i];
    console.log(i + ": ", arr);
  }
  arr[position + 1] = newValue;
  return arr;
}

function arrayDeleteValue(value) {
  console.log("Before: ", arr);

  // 1. 找到 value 的位置(index)，找不到則回覆原本的 arr
  let position = getPosition(value);
  if (!position) {
    return arr;
  }

  // 2. 刪除它，並將其他數值往前遞補
  for (let i = 0; i < arr.length - position; i++) {
    let j = position + i;
    arr[j] = arr[j + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

console.log("arrayInsertAfterValue(3, 5): ", arrayInsertAfterValue(3, 5));
// console.log('arrayDeleteValue(3): ', arrayDeleteValue(3));
