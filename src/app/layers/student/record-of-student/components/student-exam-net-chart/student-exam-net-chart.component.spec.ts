import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamNetChartComponent } from './student-exam-net-chart.component';

describe('StudentExamNetChartComponent', () => {
  let component: StudentExamNetChartComponent;
  let fixture: ComponentFixture<StudentExamNetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentExamNetChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentExamNetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
