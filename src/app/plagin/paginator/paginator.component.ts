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
    this.cur = i;
    this.pageSelected.emit(i + 1);
    
    const container = this.container.nativeElement;
    const indexes = container.querySelectorAll('.index');
    
    indexes.forEach((el, idx) => {
      if (idx === i) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}