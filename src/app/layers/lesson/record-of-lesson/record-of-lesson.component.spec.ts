import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfLessonComponent } from './record-of-lesson.component';

describe('RecordOfLessonComponent', () => {
  let component: RecordOfLessonComponent;
  let fixture: ComponentFixture<RecordOfLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
