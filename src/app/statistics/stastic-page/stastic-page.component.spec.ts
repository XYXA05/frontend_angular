import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StasticPageComponent } from './stastic-page.component';

describe('StasticPageComponent', () => {
  let component: StasticPageComponent;
  let fixture: ComponentFixture<StasticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StasticPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StasticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
