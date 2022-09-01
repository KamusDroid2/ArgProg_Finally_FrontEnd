import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweducationComponent } from './neweducation.component';

describe('NeweducationComponent', () => {
  let component: NeweducationComponent;
  let fixture: ComponentFixture<NeweducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeweducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeweducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
