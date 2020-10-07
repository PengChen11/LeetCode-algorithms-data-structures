'use strict';

const {Node, LinkedList} = require('../linked_list_creator');

const swapPair = require('./swap_nodes');

describe('6_wap_node, tests for Leet Code challenge 24, swap nodes in pairs', ()=>{

  it('tests with Input: head = [1,2,3,4], expecting Output: [2,1,4,3]', ()=>{
    let testList = new LinkedList();
    [1,2,3,4].map((item)=>testList.append(new Node(item)));
    testList.head = swapPair(testList.head);
    expect(testList.showAsArray()).toStrictEqual([2,1,4,3]);
  });

  it('tests with Input: head = [1,2,3], expecting Output: [2,1,3]', ()=>{
    let testList = new LinkedList();
    [1,2,3].map((item)=>testList.append(new Node(item)));
    testList.head = swapPair(testList.head);
    expect(testList.showAsArray()).toStrictEqual([2,1,3]);
  });

  it('tests with Input: head = [], expecting Output: []', ()=>{
    let testList = new LinkedList();
    testList.head = swapPair(testList.head);
    expect(testList.showAsArray()).toStrictEqual([]);
  });

  it('tests with Input: head = [1], expecting Output: [1]', ()=>{
    let testList = new LinkedList();
    testList.append(new Node(1));
    testList.head = swapPair(testList.head);
    expect(testList.showAsArray()).toStrictEqual([1]);
  });

});
