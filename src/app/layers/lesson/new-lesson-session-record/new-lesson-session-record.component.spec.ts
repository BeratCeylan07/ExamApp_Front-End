import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLessonSessionRecordComponent } from './new-lesson-session-record.component';

describe('NewLessonSessionRecordComponent', () => {
  let component: NewLessonSessionRecordComponent;
  let fixture: ComponentFixture<NewLessonSessionRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLessonSessionRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewLessonSessionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
