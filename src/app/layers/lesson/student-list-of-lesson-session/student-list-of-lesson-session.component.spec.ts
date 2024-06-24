import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListOfLessonSessionComponent } from './student-list-of-lesson-session.component';

describe('StudentListOfLessonSessionComponent', () => {
  let component: StudentListOfLessonSessionComponent;
  let fixture: ComponentFixture<StudentListOfLessonSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListOfLessonSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListOfLessonSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
