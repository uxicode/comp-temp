import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav.component';
import {SidebarComponent} from './sidebar.component';
import {StaticMenudatasourceService} from './model/static.menudatasource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, SidebarComponent],
  providers:[StaticMenudatasourceService],
  exports:[NavComponent]
})
export class NavModule { }
