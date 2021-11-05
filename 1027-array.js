// Array 實作
let arr = new Array(5);
arr = [1, 2, 3, 4, 5];

function arrayInsertAfterValue(value, newValue) {
  let newArr = arr;
  let position = 0;

  // 1. 找到 value 的位置(index)，找不到則回覆原本的 arr
  while (position < arr.length) {
    if (arr[position] === value) {
      break;
    }
    position++;
  }

  // 2. 新增 newValue ，並將其他數值往後搬
  if (position !== null) {
      console.log('here');
    newArr[position] = newValue;
    console.log('arr', arr);
    console.log('newArr', newArr);
    // for (let i = position; i < arr.length; i++) {
    //   newArr[i + 1] = arr[i];
    //   console.log('newArr-i', i, newArr);
    // }
  }
  return newArr;
}

// function arrayDeleteValue(value) {
//   let newArr = arr;
//   let position = 0;

//   // 1. 找到 value 的位置(index)，找不到則回覆原本的 arr
//   while (position < arr.length) {
//     if (arr[position] === value) {
//       break;
//     }
//     position++;
//   }
//   // 2. 刪除它，並將其他數值往前遞補
//   if (position !== null) {
//     for (let i = position; i < arr.length; i++) {
//       newArr[i - 1] = arr[i];
//     }
//     // newArr.length = newArr.length - 1;
//   }
//   return newArr;
// }

arr = arrayInsertAfterValue(3, 5);
// arr = arrayDeleteValue(3);
console.log("Arr: ", arr);