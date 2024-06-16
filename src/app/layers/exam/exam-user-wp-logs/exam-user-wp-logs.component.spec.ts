import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUserWpLogsComponent } from './exam-user-wp-logs.component';

describe('ExamUserWpLogsComponent', () => {
  let component: ExamUserWpLogsComponent;
  let fixture: ComponentFixture<ExamUserWpLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamUserWpLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamUserWpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
