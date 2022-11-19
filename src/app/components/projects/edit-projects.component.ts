import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { UpImgService } from 'src/app/service/up-img.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  Projects: Projects = null;

  constructor(
    private projectsS: ProjectsService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public upImgService: UpImgService) {}
  


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.detail(id).subscribe(
      data =>{
        this.Projects = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.update(id, this.Projects).subscribe(
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
    this.upImgService.upImage($event, name)
  }

}
