import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfNewteacherComponent } from './record-of-newteacher.component';

describe('RecordOfNewteacherComponent', () => {
  let component: RecordOfNewteacherComponent;
  let fixture: ComponentFixture<RecordOfNewteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfNewteacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfNewteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
