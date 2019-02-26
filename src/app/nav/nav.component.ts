import {Component, OnInit} from '@angular/core';
import {ChanceService} from '../utils/chance.service';
import {SidemenuModel} from './model/sidemenu.model';

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

  sideMenus:SidemenuModel[]=[
    new SidemenuModel('Form', '', [
      {tit:'General Form', link:''},
      {tit:'Form Validation', link:''},
      {tit:'Form Button', link:''}
    ] ),
    new SidemenuModel('UI Elements', '', [
      {tit:'menu1', link:''},
      {tit:'menu2', link:''},
      {tit:'menu3', link:''}
    ] ),
    new SidemenuModel('Tables', '' ),
    new SidemenuModel('Charts', '', [
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
  }

}

