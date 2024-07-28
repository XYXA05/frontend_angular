import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildPlanningComponent } from './new-build-planning.component';

describe('NewBuildPlanningComponent', () => {
  let component: NewBuildPlanningComponent;
  let fixture: ComponentFixture<NewBuildPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBuildPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBuildPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
