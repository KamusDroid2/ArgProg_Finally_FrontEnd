import { Component, HostBinding, OnInit } from '@angular/core';
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
  @HostBinding('class') clases = 'row';

  projects: Projects = {
    id: 0,
    project: '',
    description: '',
    img: '',
  };

  edit: boolean = false;

  constructor(private upImgPService: UpImgPService, 
    private projectsS: ProjectsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params["id"]) {
      this.projectsS.getProject(params["id"])
        .subscribe(
          res => {
            console.log(res);
            this.projects = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewProject() {
    delete this.projects.id;
    this.projectsS.saveProjects(this.projects)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['']);
        },
        err => console.error(err)
      )
  }

  updateProject() {
    delete this.projects;
    this.projectsS.updateProjects(this.projects.id, this.projects)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['']);
        },
        err => console.error(err)
      )
  }
  upImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "project" + id;
    this.upImgPService.upImage($event, name);
    this.projects.img = this.upImgPService.url;


}
 
 
}
 
 
 
 
 
/*project!: string;
  description!: string;
  img!: string;
  Projects: Projects[] = [];
  

  constructor(
    private projectsS: ProjectsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public upImgPService: UpImgPService) { }

  ngOnInit(): void {
    this.onCreate();
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
  
  upImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "project" + id;
    this.upImgPService.upImage($event, name)
  }

}*/