import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAssignmentComponent } from './reactive-assignment.component';

describe('ReactiveAssignmentComponent', () => {
  let component: ReactiveAssignmentComponent;
  let fixture: ComponentFixture<ReactiveAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
