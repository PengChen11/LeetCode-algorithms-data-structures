'use strict';

const {Node, LinkedList} = require('../linked_list_creator');

const removeNthFromEnd = require('./remove_nth');

describe('5_remove_nth, Leet Code challenge 19, remove the nth node from the end of the list and return its head', ()=>{

  it('test Input: head = [1,2,3,4,5], n = 2, Output should be [1,2,3,5]', ()=>{
    let testList = new LinkedList();
    [1,2,3,4,5].map((num)=>testList.append(new Node(num)));
    testList.head = removeNthFromEnd(testList.head, 2);
    expect(testList.showAsArray()).toStrictEqual([1,2,3,5]);
  });

  it('test Input: head = [1], n = 1, Output: []', ()=>{
    let testList = new LinkedList();
    testList.append(new Node(1));
    testList.head = removeNthFromEnd(testList.head, 1);
    expect(testList.showAsArray()).toStrictEqual([]);
  });

  it('test Input: head = [1,2], n = 1, Output: [1]', ()=>{
    let testList = new LinkedList();
    [1,2].map((num)=>testList.append(new Node(num)));
    testList.head = removeNthFromEnd(testList.head, 1);
    expect(testList.showAsArray()).toStrictEqual([1]);
  });

  it('test Input: head = [1,2], n = 2, Output: [2]', ()=>{
    let testList = new LinkedList();
    [1,2].map((num)=>testList.append(new Node(num)));
    testList.head = removeNthFromEnd(testList.head, 2);
    expect(testList.showAsArray()).toStrictEqual([2]);
  });

});

