import { Injectable } from '@angular/core';
import {StaticMenudatasourceService} from './static.menudatasource.service';
import {SidemenuModel} from './sidemenu.model';

@Injectable()
export class SidemenuRepositoryService {

  toggleMenus:SidemenuModel[]=[];

  constructor(private menuDataSource:StaticMenudatasourceService) {
    menuDataSource.getSideMenuDatas().subscribe(data =>{
      this.toggleMenus=data.map( p=> {
        console.log(p)
      });

    })
  }
}
