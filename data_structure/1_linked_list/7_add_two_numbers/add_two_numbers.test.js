'use strict';

const {Node, LinkedList} = require('../linked_list_creator');

const {addTwoNumbers, addTwoNumbers_simpler, addTwoNumbers_no_numberOver20Digits} = require('./add_two_numbers');

describe('7_add_two_numbers, LeetCode challenge 445 (Medium)', ()=>{

  it('test with Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4), expected Output: 7 -> 8 -> 0 -> 7', ()=>{
    let testList1 = new LinkedList();
    [7,2,4,3].map((item)=>testList1.append(new Node(item)));
    let testList2 = new LinkedList();
    [5,6,4].map((item)=>testList2.append(new Node(item)));
    let newList = new LinkedList();
    newList.head = addTwoNumbers(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([7,8,0,7]);
    newList.head = addTwoNumbers_simpler(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([7,8,0,7]);
    newList.head = addTwoNumbers_no_numberOver20Digits(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([7,8,0,7]);
  });

  it('test with Input: (5) + (5), expected Output: 1 -> 0 ', ()=>{
    let testList1 = new LinkedList();
    testList1.append(new Node(5));
    let testList2 = new LinkedList();
    testList2.append(new Node(5));
    let newList = new LinkedList();
    newList.head = addTwoNumbers(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0]);
    newList.head = addTwoNumbers_simpler(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0]);
    newList.head = addTwoNumbers_no_numberOver20Digits(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0]);
  });

  it('test with Input: (8 -> 9 -> 9) + (2), expected Output: 9 -> 0 -> 1', ()=>{
    let testList1 = new LinkedList();
    [8,9,9].map((item)=>testList1.append(new Node(item)));
    let testList2 = new LinkedList();
    [2].map((item)=>testList2.append(new Node(item)));
    let newList = new LinkedList();
    newList.head = addTwoNumbers(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([9,0,1]);
    newList.head = addTwoNumbers_simpler(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([9,0,1]);
    newList.head = addTwoNumbers_no_numberOver20Digits(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([9,0,1]);
  });

  it('test with Input: [6,4,5,0,4,4,9,4,1] + [3,8,8,0,3,0,1,4,8], expected Output: 7 -> 8 -> 0 -> 7', ()=>{
    let testList1 = new LinkedList();
    [6,4,5,0,4,4,9,4,1].map((item)=>testList1.append(new Node(item)));
    let testList2 = new LinkedList();
    [3,8,8,0,3,0,1,4,8].map((item)=>testList2.append(new Node(item)));
    let newList = new LinkedList();
    newList.head = addTwoNumbers(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0,3,3,0,7,5,0,8,9]);
    newList.head = addTwoNumbers_simpler(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0,3,3,0,7,5,0,8,9]);
    newList.head = addTwoNumbers_no_numberOver20Digits(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([1,0,3,3,0,7,5,0,8,9]);
  });

  it('test with over 20 digits of Input lists', ()=>{
    let testList1 = new LinkedList();
    [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].map((item)=>testList1.append(new Node(item)));
    let testList2 = new LinkedList();
    [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].map((item)=>testList2.append(new Node(item)));
    let newList = new LinkedList();
    newList.head = addTwoNumbers(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8]);
    newList.head = addTwoNumbers_simpler(testList1.head, testList2.head);
    expect(newList.showAsArray()).toStrictEqual([2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8,2,4,6,8]);
  });
});



