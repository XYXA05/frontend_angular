import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarButtonComponent } from './main-navbar-button.component';

describe('MainNavbarButtonComponent', () => {
  let component: MainNavbarButtonComponent;
  let fixture: ComponentFixture<MainNavbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavbarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainNavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
