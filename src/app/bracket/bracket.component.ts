import {Component, Input, OnInit} from '@angular/core';
import {BracketNode} from '../bracket-node';
import {ActivatedRoute} from '@angular/router';
import {TeamIdService} from '../team-id.service';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {

  headNode: BracketNode;

  teamSeedsAndNames;

  configApplied = false;

  @Input () defaultConfig: string;

  config = this.defaultConfig;

  constructor(private route: ActivatedRoute, private teamIdService: TeamIdService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.setConfig(params['config']);
    });
  }

  initTeamsSeedsAndNames() {
    this.teamSeedsAndNames = [
      {'seed': 1, 'teamName': ''},
      {'seed': 16, 'teamName': ''},
      {'seed': 9, 'teamName': ''},
      {'seed': 8, 'teamName': ''},
      {'seed': 13, 'teamName': ''},
      {'seed': 4, 'teamName': ''},
      {'seed': 5, 'teamName': ''},
      {'seed': 12, 'teamName': ''},
      {'seed': 2, 'teamName': ''},
      {'seed': 15, 'teamName': ''},
      {'seed': 7, 'teamName': ''},
      {'seed': 10, 'teamName': ''},
      {'seed': 3, 'teamName': ''},
      {'seed': 14, 'teamName': ''},
      {'seed': 6, 'teamName': ''},
      {'seed': 11, 'teamName': ''}];
  }

  setConfig(config: string) {
    if (config) {
      this.config = config;
    } else {
      this.config = this.defaultConfig;
    }

    this.applyConfig();
  }

  applyConfig() {

    this.initTeamsSeedsAndNames();

    this.teamSeedsAndNames.forEach(element => {
      console.log(element.teamName + 'changed to: ');
      element.teamName = this.teamIdService.getTeamAtIndex(this.hexToIndex(this.config.substring((element.seed - 1) * 2, (element.seed - 1) * 2 + 2)));
      console.log(element.teamName + '\n');
    });

    this.initBracket();

    this.configApplied = true;
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

  hexToIndex(hex: string): number {
    return parseInt(hex, 16);
  }

  currentConfig(): string {
    const teamsCopy = this.teamSeedsAndNames;

    teamsCopy.sort( (a, b) => {
      return a['seed'] - b['seed'];
    });

    let ret = '';

    teamsCopy.forEach( element => {
      ret += this.teamIdService.getIndexForTeam(element['teamName']).toString(16);
    });

    return ret;
  }
}
