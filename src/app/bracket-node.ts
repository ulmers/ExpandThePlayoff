export class BracketNode {

  parent: BracketNode;
  left: BracketNode;
  right: BracketNode;

  teamName: string;

  constructor(teamName: string, parent: BracketNode) {
    this.teamName = teamName;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}
