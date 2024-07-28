import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapProjectNewBuildComponent } from './map-project-new-build.component';

describe('MapProjectNewBuildComponent', () => {
  let component: MapProjectNewBuildComponent;
  let fixture: ComponentFixture<MapProjectNewBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapProjectNewBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapProjectNewBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
