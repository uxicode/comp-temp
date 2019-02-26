import {Component, Input, OnInit} from '@angular/core';
// import {SidemenuModel} from './model/sidemenu.model';
import {SidemenuRepositoryService} from './model/sidemenu.repository.service';
import {SidemenuModel} from './model/sidemenu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @Input() menus:SidemenuModel[];

  public sideMenus:Array<any>=[];
  constructor(public menusData:SidemenuRepositoryService) {
    this.sideMenus=menusData.getToggleMenus();
  }

  ngOnInit() {}

  toggled(event:any, idx:number):void {
    event.preventDefault();
   this.menusData.noSelectedToggleReset(idx);
   this.menusData.setToggleChanged(idx);
    // this.toggles[idx]
    // console.log('클릭 idx='+idx )
  }
  getToggleCheck(idx:number):boolean{
   return this.menusData.getToggled(idx);
  }

}

