import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfStudentComponent } from './record-of-student.component';

describe('RecordOfStudentComponent', () => {
  let component: RecordOfStudentComponent;
  let fixture: ComponentFixture<RecordOfStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
