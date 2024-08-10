import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 1; // Default to 1 item per page
  @Output() pageSelected = new EventEmitter<number>();
  @ViewChild('container') container: ElementRef;

  cur = -1;
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.updatePages();
    }
  }

  updatePages(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i);
  }

  handleIndexClick(i: number): void {
    const c = this.container.nativeElement;
  
    // Clear previous styles
    c.className = 'container';
    void c.offsetWidth; // Reflow
    c.classList.add('open');
    
    const translation = i * 52; // Assuming 52px is the space needed for each index
    c.style.setProperty('--translateX', `${translation}px`);
  
    if (this.cur > i) {
      c.classList.add('flip');
    }
  
    this.cur = i;
    this.pageSelected.emit(i + 1);
  }
}