import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSessionTfScoreSetComponent } from './exam-session-tf-score-set.component';

describe('ExamSessionTfScoreSetComponent', () => {
  let component: ExamSessionTfScoreSetComponent;
  let fixture: ComponentFixture<ExamSessionTfScoreSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSessionTfScoreSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSessionTfScoreSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
