import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-neweducation',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css']
})
export class NeweducationComponent implements OnInit {
  nameEd!: string;
  descriptionEd!: string;

  constructor(private educationS: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const education = new Education(this.nameEd, this.descriptionEd);
    this.educationS.save(education).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
