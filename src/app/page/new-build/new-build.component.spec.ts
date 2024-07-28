import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildComponent } from './new-build.component';

describe('NewBuildComponent', () => {
  let component: NewBuildComponent;
  let fixture: ComponentFixture<NewBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
