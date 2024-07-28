import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBuilderBigComponent } from './cart-builder-big.component';

describe('CartBuilderBigComponent', () => {
  let component: CartBuilderBigComponent;
  let fixture: ComponentFixture<CartBuilderBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartBuilderBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartBuilderBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
