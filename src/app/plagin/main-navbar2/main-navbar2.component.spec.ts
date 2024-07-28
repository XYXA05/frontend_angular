import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbar2Component } from './main-navbar2.component';

describe('MainNavbar2Component', () => {
  let component: MainNavbar2Component;
  let fixture: ComponentFixture<MainNavbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavbar2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainNavbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
