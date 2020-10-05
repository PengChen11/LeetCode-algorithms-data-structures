'use strict';

const find_intersection = require('./find_intersection');

const {LinkedList, Node} = require('../linked_list_creator');


describe('LeetCode challenge 160 test', ()=>{

  it('testing with an intersection node', ()=>{
    let a1= new Node('a1'), a2 = new Node('a2'), b1 = new Node('b1'), b2 = new Node('b2'), b3 = new Node('b3'), c1 = new Node('c1'), c2 = new Node('c2'), c3 = new Node('c3');

    let listA = new LinkedList(), listB = new LinkedList();

    listA.append(a1);listA.append(a2);listA.append(c1);listA.append(c2);listA.append(c3);
    listB.append(b1);listB.append(b2);listB.append(b3);
    listB.head.next.next.next = c1;
    expect(listA.showAsArray()).toStrictEqual(['a1','a2','c1','c2','c3']);
    expect(listB.showAsArray()).toStrictEqual(['b1','b2','b3','c1','c2','c3']);
    expect(find_intersection(listA.head,listB.head).value).toBe('c1');
  });

  it('testing without an intersection node', ()=>{
    let a1= new Node('a1'), a2 = new Node('a2'), b1 = new Node('b1'), b2 = new Node('b2'), b3 = new Node('b3');

    let listA = new LinkedList(), listB = new LinkedList();

    listA.append(a1);listA.append(a2);
    listB.append(b1);listB.append(b2);listB.append(b3);

    expect(find_intersection(listA.head,listB.head)).toBe(null);
  });

});
