import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  name!: string;
  porcen!: number;
  
  constructor(private skillsS: SkillsService, private router: Router) { }
  
  ngOnInit(): void {
  }
  
  onCreate(): void{
    const skills = new Skills(this.name, this.porcen);
    this.skillsS.save(skills).subscribe(
      data =>{
        alert("Skill añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
  

