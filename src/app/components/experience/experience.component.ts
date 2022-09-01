import { Component, OnInit } from '@angular/core';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experience[] = [];


  constructor(private sExperience: SExperienceService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.submExperience();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  submExperience(): void{
    this.sExperience.lista().subscribe(data => {this.expe = data;})
  }
  delete(id?: number){
    if(id != undefined){
      this.sExperience.delete(id).subscribe(
        data => {
          this.submExperience();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


}

