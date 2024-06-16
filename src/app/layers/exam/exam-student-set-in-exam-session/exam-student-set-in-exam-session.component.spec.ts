import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamStudentSetInExamSessionComponent } from './exam-student-set-in-exam-session.component';

describe('ExamStudentSetInExamSessionComponent', () => {
  let component: ExamStudentSetInExamSessionComponent;
  let fixture: ComponentFixture<ExamStudentSetInExamSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamStudentSetInExamSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamStudentSetInExamSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
