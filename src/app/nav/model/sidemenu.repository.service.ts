import { Injectable } from '@angular/core';
import {StaticMenudatasourceService} from './static.menudatasource.service';
import {SidemenuModel} from './sidemenu.model';

@Injectable()
export class SidemenuRepositoryService {

  private toggleMenus:Array<any>;

  /**
   * 데이터 재 생성 하여 추가
   * @param menuDataSource
   */
  constructor(private menuDataSource:StaticMenudatasourceService) {
    menuDataSource.getSideMenuDatas().subscribe( data =>{
      this.toggleMenus=data.map( p=> {
        return {...p, toggle:false, hasSub:p.submenus!==undefined?true:false}
        // return Object.assign(p, { toggle:false, hasSub:p.submenus!==undefined?true:false})
      });
    })
  }

  /**
   * sidemenu 데이터에 새로운 속성 추가한 배열 생성한것 가져오기
   */
  getToggleMenus():Array<any>{
    return this.toggleMenus;
  }

  /**
   * 선택되지 않은 toggle들 false로 다시 셋팅
   * @param idx
   */
  noSelectedToggleReset(idx:number):void{
    this.toggleMenus.filter( (item, i) => i!==idx ).forEach( item =>item.toggle=false );
  }

  /**
   * toggle 변수 변경
   * @param idx
   */
  setToggleChanged( idx:number ):void{
    this.getToggleMenus()[idx].toggle=!this.getToggleMenus()[idx].toggle;
  }

  /**
   * 현재 toggle 변수 상태 가져오기
   * @param idx
   */
  getToggled(idx:number):boolean{
    return this.getToggleMenus()[idx].toggle;
  }
}
