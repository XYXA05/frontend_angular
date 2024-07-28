import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPutiComponent } from './document-puti.component';

describe('DocumentPutiComponent', () => {
  let component: DocumentPutiComponent;
  let fixture: ComponentFixture<DocumentPutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentPutiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentPutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
