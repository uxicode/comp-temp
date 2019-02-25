import {Component, OnInit} from '@angular/core';
import {ChanceService} from '../utils/chance.service';
import {NavModel} from './nav.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  name:string;
  word:string;
  logoImgURL:string;
  avatarImgURL:string;

  sideMenus:NavModel[]=[
    new NavModel('Form', '', [
      {tit:'General Form', link:''},
      {tit:'Form Validation', link:''},
      {tit:'Form Button', link:''}
    ] ),
    new NavModel('UI Elements', '', [
      {tit:'menu1', link:''},
      {tit:'menu2', link:''},
      {tit:'menu3', link:''}
    ] ),
    new NavModel('Tables', '' ),
    new NavModel('Charts', '', [
      {tit:'menu1', link:''},
      {tit:'menu2', link:''},
      {tit:'menu3', link:''}
    ] )
    ];//end

  constructor(public chance:ChanceService) {}

  ngOnInit() {
    this.name=this.chance.name();
    this.word=this.chance.word();
    this.logoImgURL = this.chance.avatar();
    this.avatarImgURL = this.chance.avatar(true);

    console.log( this.sideMenus[0])
  }

}

