import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfLessonSesionComponent } from './record-of-lesson-sesion.component';

describe('RecordOfLessonSesionComponent', () => {
  let component: RecordOfLessonSesionComponent;
  let fixture: ComponentFixture<RecordOfLessonSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfLessonSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfLessonSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
