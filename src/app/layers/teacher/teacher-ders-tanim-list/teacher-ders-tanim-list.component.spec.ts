import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDersTanimListComponent } from './teacher-ders-tanim-list.component';

describe('TeacherDersTanimListComponent', () => {
  let component: TeacherDersTanimListComponent;
  let fixture: ComponentFixture<TeacherDersTanimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherDersTanimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherDersTanimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
