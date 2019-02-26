export class SidemenuModel {
  constructor(
    public tit:string,
    public link:string,
    public submenus?:{tit:string, link:string}[]
  ){}
}

