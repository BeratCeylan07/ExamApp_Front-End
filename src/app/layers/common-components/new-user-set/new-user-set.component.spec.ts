import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserSetComponent } from './new-user-set.component';

describe('NewUserSetComponent', () => {
  let component: NewUserSetComponent;
  let fixture: ComponentFixture<NewUserSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUserSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
