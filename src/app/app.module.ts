import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChanceService} from './utils/chance.service';
import {NavModule} from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule
  ],
  providers: [ChanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
