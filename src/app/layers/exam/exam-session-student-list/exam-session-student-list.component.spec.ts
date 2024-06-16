import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSessionStudentListComponent } from './exam-session-student-list.component';

describe('ExamSessionStudentListComponent', () => {
  let component: ExamSessionStudentListComponent;
  let fixture: ComponentFixture<ExamSessionStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSessionStudentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSessionStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
