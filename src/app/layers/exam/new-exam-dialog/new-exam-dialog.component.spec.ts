import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamDialogComponent } from './new-exam-dialog.component';

describe('NewExamDialogComponent', () => {
  let component: NewExamDialogComponent;
  let fixture: ComponentFixture<NewExamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewExamDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewExamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
