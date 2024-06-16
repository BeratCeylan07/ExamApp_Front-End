import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUserSetDialogComponent } from './exam-user-set-dialog.component';

describe('ExamUserSetDialogComponent', () => {
  let component: ExamUserSetDialogComponent;
  let fixture: ComponentFixture<ExamUserSetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamUserSetDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamUserSetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
