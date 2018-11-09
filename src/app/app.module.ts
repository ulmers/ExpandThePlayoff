import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { BracketComponent } from './bracket/bracket.component';

import { MatCard, MatCardTitle } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    BracketComponent,
    MatCard,
    MatCardTitle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
