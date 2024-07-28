import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersPageComponent } from './builders-page.component';

describe('BuildersPageComponent', () => {
  let component: BuildersPageComponent;
  let fixture: ComponentFixture<BuildersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
