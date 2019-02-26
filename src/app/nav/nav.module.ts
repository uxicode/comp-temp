import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav.component';
import {SidebarComponent} from './sidebar.component';
import {StaticMenudatasourceService} from './model/static.menudatasource.service';
import {SidemenuRepositoryService} from './model/sidemenu.repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, SidebarComponent],
  providers:[StaticMenudatasourceService, SidemenuRepositoryService],
  exports:[NavComponent]
})
export class NavModule { }
