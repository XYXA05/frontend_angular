import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfFinancingComponent } from './terms-of-financing.component';

describe('TermsOfFinancingComponent', () => {
  let component: TermsOfFinancingComponent;
  let fixture: ComponentFixture<TermsOfFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsOfFinancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsOfFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
