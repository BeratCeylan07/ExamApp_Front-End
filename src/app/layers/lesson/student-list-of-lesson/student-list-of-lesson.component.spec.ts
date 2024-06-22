import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListOfLessonComponent } from './student-list-of-lesson.component';

describe('StudentListOfLessonComponent', () => {
  let component: StudentListOfLessonComponent;
  let fixture: ComponentFixture<StudentListOfLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListOfLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListOfLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
