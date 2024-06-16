import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSessionStudentListForSessionComponent } from './exam-session-student-list-for-session.component';

describe('ExamSessionStudentListForSessionComponent', () => {
  let component: ExamSessionStudentListForSessionComponent;
  let fixture: ComponentFixture<ExamSessionStudentListForSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSessionStudentListForSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSessionStudentListForSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
