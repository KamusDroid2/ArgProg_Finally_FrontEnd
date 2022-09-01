export class Experience {
  id? : number;
  nameE : string;
  descriptionExp : string;

  constructor(nameE: string, descriptionExp: string){
    this.nameE = nameE;
    this.descriptionExp = descriptionExp;

  }
}
