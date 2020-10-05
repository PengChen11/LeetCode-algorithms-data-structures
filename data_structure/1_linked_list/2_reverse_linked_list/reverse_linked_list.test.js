'use strict';

const {reverseLL, reverseLL_recursive} = require('./reverse_linked_list');
const {LinkedList, Node} = require('../linked_list_creator');
const linked_list_creator = require('../linked_list_creator');


describe('tests for LeetCode challenge 206, reverse a linked list (easy)', ()=>{

  it('test with 1 -> 2 -> 3 -> 4 -> 5 -> NULL. ', ()=>{
    //build testing linked list
    let testList = new LinkedList();
    [1,2,3,4,5].map((item)=>testList.append(new Node(item)));

    let newHead = reverseLL(testList.head);
    testList.head = newHead;
    expect(testList.showAsArray()).toStrictEqual([5,4,3,2,1]);
  });

  it('test recursive method with 1 -> 3 -> 5 -> 7 -> 9 -> NULL. ', ()=>{
    //build testing linked list
    let testList = new LinkedList();
    [1,3,5,7,9].map((item)=>testList.append(new Node(item)));
    let newHead = reverseLL_recursive(testList.head);
    testList.head = newHead;
    expect(testList.showAsArray()).toStrictEqual([9,7,5,3,1]);
  });
});

