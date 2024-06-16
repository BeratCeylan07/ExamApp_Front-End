import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaxmRecordsOfStudentComponent } from './eaxm-records-of-student.component';

describe('EaxmRecordsOfStudentComponent', () => {
  let component: EaxmRecordsOfStudentComponent;
  let fixture: ComponentFixture<EaxmRecordsOfStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaxmRecordsOfStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EaxmRecordsOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
