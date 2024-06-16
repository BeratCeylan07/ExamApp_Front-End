import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSessionRecordDialogComponent } from './exam-session-record-dialog.component';

describe('ExamSessionRecordDialogComponent', () => {
  let component: ExamSessionRecordDialogComponent;
  let fixture: ComponentFixture<ExamSessionRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSessionRecordDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSessionRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
