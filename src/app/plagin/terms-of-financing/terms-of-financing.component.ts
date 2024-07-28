import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-terms-of-financing',
  templateUrl: './terms-of-financing.component.html',
  styleUrl: './terms-of-financing.component.css',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class TermsOfFinancingComponent  implements AfterViewInit {
  @Input() getTermsOfFinancing: any;
  constructor( private elementRef: ElementRef, private cdRef: ChangeDetectorRef, private renderer: Renderer2){}

  ngAfterViewInit(): void {
    this.initCardHoverEffect();
  }

  private initCardHoverEffect(): void {
    this.cdRef.detectChanges();

    const cards = this.elementRef.nativeElement.querySelectorAll('.card');
    const background = this.elementRef.nativeElement.querySelector('.background');

    if (!background || cards.length === 0) {
      console.error('Background element or card elements not found in the DOM');
      return;
    }

    const lastHoveredCardIndex = parseInt(localStorage.getItem('lastHoveredCardIndex') || '0', 10);

    if (lastHoveredCardIndex >= cards.length) {
      console.error('Last hovered card index is out of bounds');
      return;
    }

    const cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
    const x = cardRect.left + window.scrollX + cardRect.width / 2;
    const y = cardRect.top + window.scrollY + cardRect.height / 2;

    this.renderer.setStyle(background, 'width', `${cardRect.width}px`);
    this.renderer.setStyle(background, 'height', `${cardRect.height}px`);
    this.renderer.setStyle(background, 'transform', `translate(${x - cardRect.width / 2}px, ${y - cardRect.height / 2}px)`);
    this.renderer.setStyle(background, 'opacity', '0');

    cards.forEach((card: HTMLElement, index: number) => {
      this.renderer.listen(card, 'mouseenter', () => {
        if (card.classList.contains('zoomed')) return;

        const rect = card.getBoundingClientRect();
        const cardX = rect.left + window.scrollX + rect.width / 2;
        const cardY = rect.top + window.scrollY + rect.height / 2;

        this.renderer.setStyle(background, 'width', `${rect.width}px`);
        this.renderer.setStyle(background, 'height', `${rect.height}px`);
        this.renderer.setStyle(background, 'transform', `translate(${cardX - rect.width / 2}px, ${cardY - rect.height / 2}px)`);
        this.renderer.setStyle(background, 'opacity', '1');
        this.renderer.setStyle(background, 'top', '0%');
        this.renderer.setStyle(background, 'left', '0%');
        this.renderer.setStyle(background, 'transformOrigin', 'center');

        localStorage.setItem('lastHoveredCardIndex', index.toString());
      });

      this.renderer.listen(card, 'mouseleave', () => {
        this.renderer.setStyle(background, 'opacity', '0');
        this.renderer.setStyle(background, 'width', '0px');
        this.renderer.setStyle(background, 'height', '0px');
      });

      this.renderer.listen(card, 'click', () => {
        if (card.classList.contains('zoomed')) {
          card.classList.remove('zoomed');
          this.renderer.setStyle(card, 'transform', 'none');
          this.renderer.setStyle(card, 'position', 'relative');
          this.renderer.setStyle(card, 'width', 'unset');
          this.renderer.setStyle(card, 'height', 'unset');
          this.renderer.setStyle(card, 'top', '0');
          this.renderer.setStyle(card, 'left', '0');
          this.renderer.setStyle(card, 'zIndex', '0');

          document.body.classList.remove('overflow');

          cards.forEach((otherCard: HTMLElement) => {
            if (otherCard !== card) {
              otherCard.classList.remove('opacity-0');
            }
          });
        } else {
          card.classList.add('zoomed');
          this.renderer.setStyle(card, 'position', 'fixed');
          this.renderer.setStyle(card, 'top', '50%');
          this.renderer.setStyle(card, 'left', '50%');
          requestAnimationFrame(() => {
            this.renderer.setStyle(card, 'transform', 'translate(-50%, -50%)');
          });
          this.renderer.setStyle(card, 'width', '90vw');
          this.renderer.setStyle(card, 'height', '90vh');
          this.renderer.setStyle(card, 'zIndex', '1000');

          document.body.classList.add('overflow');

          cards.forEach((otherCard: HTMLElement) => {
            if (otherCard !== card) {
              otherCard.classList.add('opacity-0');
            }
          });
        }
      });
    });
  }
  onCardClick(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    if (card.classList.contains('zoomed')) {
      card.classList.remove('zoomed');
      this.renderer.setStyle(card, 'transform', 'none');
      this.renderer.setStyle(card, 'position', 'relative');
      this.renderer.setStyle(card, 'width', 'unset');
      this.renderer.setStyle(card, 'height', 'unset');
      this.renderer.setStyle(card, 'top', '0');
      this.renderer.setStyle(card, 'left', '0');
      this.renderer.setStyle(card, 'zIndex', '0');

      document.body.classList.remove('overflow');

      const cards = this.elementRef.nativeElement.querySelectorAll('.card');
      cards.forEach((otherCard: HTMLElement) => {
        if (otherCard !== card) {
          otherCard.classList.remove('opacity-0');
        }
      });
    } else {
      card.classList.add('zoomed');
      this.renderer.setStyle(card, 'position', 'fixed');
      this.renderer.setStyle(card, 'top', '50%');
      this.renderer.setStyle(card, 'left', '50%');
      requestAnimationFrame(() => {
        this.renderer.setStyle(card, 'transform', 'translate(-50%, -50%)');
      });
      this.renderer.setStyle(card, 'width', '90vw');
      this.renderer.setStyle(card, 'height', '90vh');
      this.renderer.setStyle(card, 'zIndex', '1000');

      document.body.classList.add('overflow');

      const cards = this.elementRef.nativeElement.querySelectorAll('.card');
      cards.forEach((otherCard: HTMLElement) => {
        if (otherCard !== card) {
          otherCard.classList.add('opacity-0');
        }
      });
    }
  }
}
