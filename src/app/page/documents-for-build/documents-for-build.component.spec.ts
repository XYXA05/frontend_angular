import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsForBuildComponent } from './documents-for-build.component';

describe('DocumentsForBuildComponent', () => {
  let component: DocumentsForBuildComponent;
  let fixture: ComponentFixture<DocumentsForBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsForBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsForBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
