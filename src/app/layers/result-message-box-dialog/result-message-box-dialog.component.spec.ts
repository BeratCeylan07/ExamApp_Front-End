import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMessageBoxDialogComponent } from './result-message-box-dialog.component';

describe('ResultMessageBoxDialogComponent', () => {
  let component: ResultMessageBoxDialogComponent;
  let fixture: ComponentFixture<ResultMessageBoxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultMessageBoxDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultMessageBoxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
