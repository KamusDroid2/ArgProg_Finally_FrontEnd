export class persona{
    id?: number;
    name: string;
    surname: string;
    img: string;

    constructor(name:string, surname:string, img:string){
        this.name = name;
        this.surname = surname;
        this.img = img;
    }
}