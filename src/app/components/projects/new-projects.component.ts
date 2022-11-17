import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { UpImgService } from 'src/app/service/up-img.service';
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

  constructor(private projectsS: ProjectsService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public upImgPService: UpImgPService) { }

  ngOnInit(): void {}
  onCreate(): void {
    const projects = new Projects(this.project, this.description, this.img);
    const id = this.activatedRouter.snapshot.params['id'];
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
  
  upImageP($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "project" + id;
    this.upImgPService.upImageP($event, name)
  }

}