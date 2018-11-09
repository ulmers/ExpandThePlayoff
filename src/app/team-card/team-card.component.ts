import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input() teamname: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
