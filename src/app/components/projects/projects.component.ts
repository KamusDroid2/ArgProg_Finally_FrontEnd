import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsS: ProjectsService, private tokenService: TokenService) { }
  isLogged = true;

  ngOnInit(): void {
    this.cargarProjects();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProjects(): void{
    this.projectsS.lista().subscribe(
      data =>{
        this.projects = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.projectsS.delete(id).subscribe(
        data => {
          this.cargarProjects();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
