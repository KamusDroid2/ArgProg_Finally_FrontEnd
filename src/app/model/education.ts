export class Education {
  id?: number;
  nameEd: string;
  descriptionEd: string;

  constructor(nameEd: string, descriptionEd: string){
      this.nameEd = nameEd;
      this.descriptionEd = descriptionEd;
  }
}
