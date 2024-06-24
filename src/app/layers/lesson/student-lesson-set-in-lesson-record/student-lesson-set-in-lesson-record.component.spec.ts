import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLessonSetInLessonRecordComponent } from './student-lesson-set-in-lesson-record.component';

describe('StudentLessonSetInLessonRecordComponent', () => {
  let component: StudentLessonSetInLessonRecordComponent;
  let fixture: ComponentFixture<StudentLessonSetInLessonRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLessonSetInLessonRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentLessonSetInLessonRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
