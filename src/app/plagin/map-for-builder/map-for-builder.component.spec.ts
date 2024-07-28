import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapForBuilderComponent } from './map-for-builder.component';

describe('MapForBuilderComponent', () => {
  let component: MapForBuilderComponent;
  let fixture: ComponentFixture<MapForBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapForBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapForBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
