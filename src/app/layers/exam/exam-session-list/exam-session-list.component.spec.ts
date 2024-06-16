import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSessionListComponent } from './exam-session-list.component';

describe('ExamSessionListComponent', () => {
  let component: ExamSessionListComponent;
  let fixture: ComponentFixture<ExamSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSessionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
