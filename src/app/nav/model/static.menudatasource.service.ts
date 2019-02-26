import { Injectable } from '@angular/core';
import {SidemenuModel} from 'src/app/nav/model/sidemenu.model'
import {from, Observable} from 'rxjs';

@Injectable()
export class StaticMenudatasourceService {

  sideMenusDatas:SidemenuModel[]=[
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
  constructor() {}
  getSideMenuDatas():Observable<SidemenuModel[]>{
   return from([this.sideMenusDatas]);
  }
}
