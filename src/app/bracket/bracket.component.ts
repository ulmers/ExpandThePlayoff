import { Component, OnInit } from '@angular/core';
import {BracketNode} from '../bracket-node';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {

  headNode: BracketNode;

  teamNames = ['Alabama',
    'Buffalo',
    'Florida',
    'Oklahoma',
    'App State',
    'LSU',
    'Michigan',
    'Washington State',
    'Clemson',
    'UAB',
    'Georgia',
    'UCF',
    'Notre Dame',
    'Utah State',
    'Texas',
    'Ohio State'];

  constructor() { }

  ngOnInit() {

    this.initBracket();
  }

  initBracket() {

    this.headNode = new BracketNode('', null);

    // TODO fix having to reverse
    this.teamNames.reverse();

    this.preorderTraverse(this.headNode, 0, 4);
  }

  preorderTraverse(currNode: BracketNode, currDepth: number, maxDepth: number) {

    if (currDepth + 1 === maxDepth) {
      currNode.left = new BracketNode(this.teamNames.pop(), currNode);
      currNode.right = new BracketNode(this.teamNames.pop(), currNode);
      return;
    }

    currNode.left = new BracketNode('', currNode);
    currNode.right = new BracketNode('', currNode);

    this.preorderTraverse(currNode.left, currDepth + 1, maxDepth);
    this.preorderTraverse(currNode.right, currDepth + 1, maxDepth);

  }

}
