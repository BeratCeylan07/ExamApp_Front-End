import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfTeacherComponent } from './record-of-teacher.component';

describe('RecordOfTeacherComponent', () => {
  let component: RecordOfTeacherComponent;
  let fixture: ComponentFixture<RecordOfTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
