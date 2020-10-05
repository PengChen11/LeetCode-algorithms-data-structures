'use strict';
const {Node, LinkedList} = require('../linked_list_creator');
const mergeLL = require('./merge_LL');

describe('tests for LeetCode challenge 21, merge two sorted linked list', ()=>{

  it('test for example 1', ()=>{
    let testList1 = new LinkedList();
    [1,2,4].map((num)=>testList1.append(new Node(num)));
    let testList2 = new LinkedList();
    [1,3,4].map((num)=>testList2.append(new Node(num)));

    let newLL = new LinkedList();
    newLL.head = mergeLL(testList1, testList2);

    expect(newLL.showAsArray()).toStrictEqual([1,1,2,3,4,4]);

  });
});
