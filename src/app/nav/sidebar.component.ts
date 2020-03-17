import {Component, Input, OnInit} from '@angular/core';
import {SidemenuModel} from './model/sidemenu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menus:SidemenuModel[];

  toggles:Array<any>=[];
  constructor() { }

  ngOnInit() {
    for(let p of this.menus){
      this.toggles.push({item:p.tit, toggle:false, hasSub:p.submenus!==undefined?true:false});
    }
  }

  toggled(event:any, idx:number):void {
    event.preventDefault();
    this.toggles.filter( (item, i) => i!==idx ).forEach( item =>item.toggle=false );
    this.toggles[idx].toggle=!this.toggles[idx].toggle;
    // this.toggles[idx]
    // console.log('클릭 idx='+idx )
  }
  getToggle(idx:number):boolean{
    return this.toggles[idx].toggle;
  }

}

