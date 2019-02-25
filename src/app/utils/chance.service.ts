import { Injectable } from '@angular/core';
import   'chance';
declare let Chance:any;

@Injectable()
export class ChanceService {
  chance:any;
  constructor() {
    this.chance=new Chance();
  }
  paragraph():string {
    return this.chance.paragraph();
  }
  sentence():string{
    return this.chance.sentence();
  }
  word(len:number=5):string{
    return this.chance.word({ length: len });
  }
  name(pf:boolean=false):string{
    return this.chance.name({ middle: true, middle_initial: true, prefix:pf, nationality: 'en' });
  }
  birthday():string{
    return this.chance.birthday({string: true, american: false});
  }
  avatar(isGravatar:boolean=false):string{
    return this.chance.avatar(isGravatar? {email: 'mail@victorquinn.com'} : undefined );
  }

}
