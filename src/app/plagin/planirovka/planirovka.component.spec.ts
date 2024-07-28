import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanirovkaComponent } from './planirovka.component';

describe('PlanirovkaComponent', () => {
  let component: PlanirovkaComponent;
  let fixture: ComponentFixture<PlanirovkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanirovkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanirovkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
