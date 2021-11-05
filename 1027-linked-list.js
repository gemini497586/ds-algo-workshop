// 實作 Linked List
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let head = node1;

let node2 = new ListNode(2);
node1.next = node2;

let node3 = new ListNode(3);
node2.next = node3;

let node4 = new ListNode(4);
node3.next = node4;

function printList(head) {
  let current = head;
  while (current !== null) {
    current = current.next;
  }
}

function insertAfterValue(value, newValue) {
  let newNode = new ListNode(newValue);
  let current = head;
  // 先找到位置
  // 為什麼這邊要檢查 current 不是 null? 什麼情況下 current 會是 null?
  // --> 因為 ListNode 設定 this.next = next === undefined ? null : next;
  //     也就是每個 next 在未串接之前，預設值是 null，
  //     所以當 current 不等於 null 時，表示這個 Linked list 尚未結束；
  //     如果當 current 等於 null 時，表示這個 Linked list 已經找到最後一個了。
  while (current !== null && current.val !== value) {
    current = current.next;
  }
  // 為什麼這邊要檢查 current？ 什麼情況下 current 會是 null?
  // --> 同上，如果當 current 等於 null 時，表示這個 Linked list 已經找到最後一個了。
  //     表示這個 Linked list 沒有找到符合的 value，自然就不會新增 newValue。
  //     反之，當 current 不等於 null 時，表示這個 Linked list 找到符合的 value
  //     結束了 while loop 來到 這段 code 進行新增 newValue。
  if (current !== null) {
    newNode.next = current.next;
    current.next = newNode;
  }
}

function deleteValue(head, value) {
  let current = head;
  let prev = null;
  while (current !== null && current.val !== value) {
    prev = current;
    current = current.next;
  }
  if (current !== null) {
    // 為什麼這邊要檢查 prev 是不是 null 而做不同的事？什麼情況下 prev 會是 null?
    // --> 在 while loop 的會在 Linked list 找完，或是找到符合的 value 時結束，
    //     當 prev 等於 null 時，表示 head 指向的第一個值就是目標 value，
    //     所以直接將 head 指向 第二個值；
    //     當 prev 不等於 null 時，表示第二個值以後才找到目標 value，
    //     所以直接將 前一個值 prev 的 next 指向目標 value 的 下一個值 next；
    //     最後讓目標 value 的 next 設為 null 取消指向，就成功從 Linked list 中刪除。
    if (prev === null) {
      head = head.next;
    } else {
      prev.next = current.next;
    }
    current.next = null;
  }
  return head;
}

// insertAfterValue(3, 5);
// printList(head);
// // console.log(printList(head));

// head = deleteValue(head, 3);
// printList(head);
// // console.log(printList(head));
