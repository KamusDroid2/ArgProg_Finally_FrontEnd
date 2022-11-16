import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { UpImgPService } from 'src/app/service/upimg-p.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  projects: Projects = null;

  constructor(
    private projectsS: ProjectsService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public upImgPService: UpImgPService) {}
  


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.detail(id).subscribe(
      data =>{
        this.projects = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.update(id, this.projects).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
  upImageP($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="project" + id;
    this.upImgPService.upImageP($event, name)
  }

}
