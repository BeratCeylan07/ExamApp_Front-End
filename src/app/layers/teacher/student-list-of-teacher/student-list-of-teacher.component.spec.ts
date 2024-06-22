import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListOfTeacherComponent } from './student-list-of-teacher.component';

describe('StudentListOfTeacherComponent', () => {
  let component: StudentListOfTeacherComponent;
  let fixture: ComponentFixture<StudentListOfTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListOfTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
