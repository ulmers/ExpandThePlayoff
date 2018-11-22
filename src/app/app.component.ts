import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  getDefaultConfig(): string {
    return '02154938214C2F786B4B1C51706A6710';
  }
}
