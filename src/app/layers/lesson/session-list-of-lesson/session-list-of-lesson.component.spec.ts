import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListOfLessonComponent } from './session-list-of-lesson.component';

describe('SessionListOfLessonComponent', () => {
  let component: SessionListOfLessonComponent;
  let fixture: ComponentFixture<SessionListOfLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionListOfLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionListOfLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
