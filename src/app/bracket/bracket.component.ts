import { Component, OnInit } from '@angular/core';
import {BracketNode} from '../bracket-node';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {

  headNode: BracketNode;

  teamSeedsAndNames = [{'seed': 1, 'teamName': 'Alabama'},
                       {'seed': 16, 'teamName': 'Buffalo'},
                       {'seed': 9, 'teamName': 'Florida'},
                       {'seed': 8, 'teamName': 'Oklahoma'},
                       {'seed': 13, 'teamName': 'App State'},
                       {'seed': 4, 'teamName': 'LSU'},
                       {'seed': 5, 'teamName': 'Michigan'},
                       {'seed': 12, 'teamName': 'Washington State'},
                       {'seed': 2, 'teamName': 'Clemson'},
                       {'seed': 15, 'teamName': 'UAB'},
                       {'seed': 7, 'teamName': 'Georgia'},
                       {'seed': 10, 'teamName': 'UCF'},
                       {'seed': 3, 'teamName': 'Notre Dame'},
                       {'seed': 14, 'teamName': 'Utah State'},
                       {'seed': 6, 'teamName': 'Texas'},
                       {'seed': 11, 'teamName': 'Ohio State'}];

  constructor() { }

  ngOnInit() {

    this.initBracket();
  }

  initBracket() {

    this.headNode = new BracketNode('', null, null);

    // TODO fix having to reverse
    this.teamSeedsAndNames.reverse();

    this.preorderTraverse(this.headNode, 0, 4);
  }

  preorderTraverse(currNode: BracketNode, currDepth: number, maxDepth: number) {

    if (currDepth + 1 === maxDepth) {
      const leftNode = this.teamSeedsAndNames.pop();
      const rightNode = this.teamSeedsAndNames.pop();

      currNode.left = new BracketNode(leftNode.teamName, leftNode.seed, currNode);
      currNode.right = new BracketNode(rightNode.teamName, rightNode.seed, currNode);
      return;
    }

    currNode.left = new BracketNode('', null,  currNode);
    currNode.right = new BracketNode('', null,  currNode);

    this.preorderTraverse(currNode.left, currDepth + 1, maxDepth);
    this.preorderTraverse(currNode.right, currDepth + 1, maxDepth);

  }

}
