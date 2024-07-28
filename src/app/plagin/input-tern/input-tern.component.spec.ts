import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTernComponent } from './input-tern.component';

describe('InputTernComponent', () => {
  let component: InputTernComponent;
  let fixture: ComponentFixture<InputTernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
