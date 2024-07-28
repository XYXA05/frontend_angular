import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafic0Component } from './grafic0.component';

describe('Grafic0Component', () => {
  let component: Grafic0Component;
  let fixture: ComponentFixture<Grafic0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Grafic0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Grafic0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
