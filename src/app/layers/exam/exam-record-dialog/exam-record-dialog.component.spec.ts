import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRecordDialogComponent } from './exam-record-dialog.component';

describe('ExamRecordDialogComponent', () => {
  let component: ExamRecordDialogComponent;
  let fixture: ComponentFixture<ExamRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamRecordDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamRecordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
