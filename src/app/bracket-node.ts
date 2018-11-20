export class BracketNode {

  parent: BracketNode;
  left: BracketNode;
  right: BracketNode;

  teamName: string;
  seed: number

  constructor(teamName: string, seed: number, parent: BracketNode) {
    this.teamName = teamName;
    this.seed = seed;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}
