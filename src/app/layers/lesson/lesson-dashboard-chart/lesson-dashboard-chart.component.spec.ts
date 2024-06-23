import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDashboardChartComponent } from './lesson-dashboard-chart.component';

describe('LessonDashboardChartComponent', () => {
  let component: LessonDashboardChartComponent;
  let fixture: ComponentFixture<LessonDashboardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonDashboardChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonDashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
