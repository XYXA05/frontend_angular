import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildAboutTheProjectComponent } from './new-build-about-the-project.component';

describe('NewBuildAboutTheProjectComponent', () => {
  let component: NewBuildAboutTheProjectComponent;
  let fixture: ComponentFixture<NewBuildAboutTheProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBuildAboutTheProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBuildAboutTheProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
