import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarSmallComponent } from './main-navbar-small.component';

describe('MainNavbarSmallComponent', () => {
  let component: MainNavbarSmallComponent;
  let fixture: ComponentFixture<MainNavbarSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavbarSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainNavbarSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
