import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBuilderComponent } from './cart-builder.component';

describe('CartBuilderComponent', () => {
  let component: CartBuilderComponent;
  let fixture: ComponentFixture<CartBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
