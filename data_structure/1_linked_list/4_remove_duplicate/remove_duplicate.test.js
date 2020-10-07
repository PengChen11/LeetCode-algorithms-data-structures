'use strict';

const {Node, LinkedList} = require('../linked_list_creator');
const {deleteDuplicates, deleteDuplicates_recursive} = require('./remove_duplicate');

describe('4_remove_duplicate, tests for LeetCode challenge 83', ()=>{

  it('test for recrusive solution', ()=>{
    let testList = new LinkedList();
    [1,1,2,3,3].map((num)=>testList.append(new Node(num)));

    testList.head = deleteDuplicates_recursive(testList.head);
    expect(testList.showAsArray()).toStrictEqual([1,2,3]);
  });

  it('test for iterative solution', ()=>{
    let testList = new LinkedList();
    [1,1,2,3,3].map((num)=>testList.append(new Node(num)));

    testList.head = deleteDuplicates(testList.head);
    expect(testList.showAsArray()).toStrictEqual([1,2,3]);
  });
});
