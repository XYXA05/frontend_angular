import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSliderMonitoringComponent } from './photo-slider-monitoring.component';

describe('PhotoSliderMonitoringComponent', () => {
  let component: PhotoSliderMonitoringComponent;
  let fixture: ComponentFixture<PhotoSliderMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoSliderMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoSliderMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
