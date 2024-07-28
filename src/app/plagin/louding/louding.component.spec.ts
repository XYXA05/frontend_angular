import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoudingComponent } from './louding.component';

describe('LoudingComponent', () => {
  let component: LoudingComponent;
  let fixture: ComponentFixture<LoudingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoudingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoudingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
