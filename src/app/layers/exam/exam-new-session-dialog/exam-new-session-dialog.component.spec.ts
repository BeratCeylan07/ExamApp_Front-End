import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNewSessionDialogComponent } from './exam-new-session-dialog.component';

describe('ExamNewSessionDialogComponent', () => {
  let component: ExamNewSessionDialogComponent;
  let fixture: ComponentFixture<ExamNewSessionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamNewSessionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamNewSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
