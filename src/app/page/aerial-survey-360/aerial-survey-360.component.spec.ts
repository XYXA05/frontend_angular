import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialSurvey360Component } from './aerial-survey-360.component';

describe('AerialSurvey360Component', () => {
  let component: AerialSurvey360Component;
  let fixture: ComponentFixture<AerialSurvey360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AerialSurvey360Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AerialSurvey360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
