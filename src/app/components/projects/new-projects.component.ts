import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { UpImgPService } from 'src/app/service/upimg-p.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
  project!: string;
  description!: string;
  img!: string;
  
  

  constructor(
    private projectsS: ProjectsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public upImgPService: UpImgPService) { }

  ngOnInit(): void {
    this.upImage;
       
  } 

  onCreate(): void {
    const projects = new Projects(this.project, this.description, this.img);
    this.projectsS.save(projects).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
  upImage($event: any) {
    this.upImgPService.upImage($event)
  }

  getImage($event: any){
    this.upImgPService.getImage()
  }
  
  
  

}
