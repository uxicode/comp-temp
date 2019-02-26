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

  constructor(public chance:ChanceService) {}

  ngOnInit() {
    this.name=this.chance.name();
    this.word=this.chance.word();
    this.logoImgURL = this.chance.avatar();
    this.avatarImgURL = this.chance.avatar(true);
  }

}

