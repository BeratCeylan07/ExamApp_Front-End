import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamSetDialogComponent } from './student-exam-set-dialog.component';

describe('StudentExamSetDialogComponent', () => {
  let component: StudentExamSetDialogComponent;
  let fixture: ComponentFixture<StudentExamSetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentExamSetDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentExamSetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
