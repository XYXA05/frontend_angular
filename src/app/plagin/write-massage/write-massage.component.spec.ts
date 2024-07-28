import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMassageComponent } from './write-massage.component';

describe('WriteMassageComponent', () => {
  let component: WriteMassageComponent;
  let fixture: ComponentFixture<WriteMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteMassageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
