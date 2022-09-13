import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexperienciaComponent } from './newexperiencia.component';

describe('NewexperienciaComponent', () => {
  let component: NewexperienciaComponent;
  let fixture: ComponentFixture<NewexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
