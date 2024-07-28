import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMonitoringComponent } from './construction-monitoring.component';

describe('ConstructionMonitoringComponent', () => {
  let component: ConstructionMonitoringComponent;
  let fixture: ComponentFixture<ConstructionMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
