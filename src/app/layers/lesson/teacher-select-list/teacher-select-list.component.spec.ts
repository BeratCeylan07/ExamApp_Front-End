import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSelectListComponent } from './teacher-select-list.component';

describe('TeacherSelectListComponent', () => {
  let component: TeacherSelectListComponent;
  let fixture: ComponentFixture<TeacherSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
