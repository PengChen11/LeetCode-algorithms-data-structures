'use strict';
const {Node, LinkedList} = require('../linked_list_creator');
const { mergeTwoLists, mergeTwoLists_2} = require('./merge_LL');

describe('4_merge_LL, tests for LeetCode challenge 21, merge two sorted linked list', ()=>{

  it('test for example 1', ()=>{
    let testList1 = new LinkedList();
    [1,2,4].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [1,3,4].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([1,1,2,3,4,4]);

  });

  it('test for example 2', ()=>{
    let testList1 = new LinkedList();
    let testList2 = new LinkedList();
    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.head).toBeNull();
  });

  it('test for example 3', ()=>{
    let testList1 = new LinkedList();
    let testList2 = new LinkedList();
    testList2.append(new Node(0));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([0]);
  });

  it('test for example 4', ()=>{
    let testList1 = new LinkedList();
    [-10,-10,-9,-4,1,6,6].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [-7].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([-10,-10,-9,-7,-4,1,6,6]);

  });

  it('test for example 1, with method 2', ()=>{
    let testList1 = new LinkedList();
    [1,2,4].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [1,3,4].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists_2(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([1,1,2,3,4,4]);

  });

  it('test for example 2, with method 2', ()=>{
    let testList1 = new LinkedList();
    let testList2 = new LinkedList();
    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.head).toBeNull();
  });

  it('test for example 3, with method 2', ()=>{
    let testList1 = new LinkedList();
    let testList2 = new LinkedList();
    testList2.append(new Node(0));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([0]);
  });

  it('test for example 4, with method 2', ()=>{
    let testList1 = new LinkedList();
    [-10,-10,-9,-4,1,6,6].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [-7].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists_2(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([-10,-10,-9,-7,-4,1,6,6]);

  });

  it('test for example 5, with method 2', ()=>{
    let testList1 = new LinkedList();
    [-2,5].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [-9,-6,-3,-1,1,6].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeTwoLists_2(testList1.head, testList2.head);

    expect(newLL.showAsArray()).toStrictEqual([-9,-6,-3,-2,-1,1,5,6]);

  });
});
