import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCattagesComponent } from './new-cattages.component';

describe('NewCattagesComponent', () => {
  let component: NewCattagesComponent;
  let fixture: ComponentFixture<NewCattagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCattagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCattagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
