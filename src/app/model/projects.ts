export class Projects {
    id: number;
    project: string;
    description: string;
    img: string;

    constructor(project:string, description:string, img:string){
        this.project = project;
        this.description = description;
        this.img = img;
    }
}