import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { BracketComponent } from './bracket/bracket.component';

import { MatCardModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ShareComponent } from './share/share.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    BracketComponent,
    ToolbarComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
