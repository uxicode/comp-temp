import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {ChanceService} from './utils/chance.service';
import { SidebarComponent } from './nav/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
