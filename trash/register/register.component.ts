import { Component, OnInit } from '@angular/core';
import { persona } from '../../src/app/model/persona.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public persona!: persona;

  constructor() {
    this.page_title = 'Registro';
  }

  ngOnInit(): void {
  }

}
