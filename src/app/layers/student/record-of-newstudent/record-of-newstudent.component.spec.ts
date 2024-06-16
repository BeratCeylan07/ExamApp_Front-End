import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOfNewstudentComponent } from './record-of-newstudent.component';

describe('RecordOfNewstudentComponent', () => {
  let component: RecordOfNewstudentComponent;
  let fixture: ComponentFixture<RecordOfNewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordOfNewstudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOfNewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
