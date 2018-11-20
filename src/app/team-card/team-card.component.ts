import {Component, Input, OnInit} from '@angular/core';
import {BracketNode} from '../bracket-node';
import {ColorService} from '../color.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input() bracketNode: BracketNode;
  @Input() class: string;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  backgroundColor(): object {
    if (this.bracketNode.teamName.length > 0) {
      return {'background-color': this.colorService.getSecondaryColor(this.bracketNode.teamName)};
    }

    return {};
}

  onClickAdvance() {
    if (this.bracketNode.teamName.length > 0) {
      this.bracketNode.parent.teamName = this.bracketNode.teamName;
      this.bracketNode.parent.seed = this.bracketNode.seed;
    }

  }

}
