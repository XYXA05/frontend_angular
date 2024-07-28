import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-slider-monitoring',
  templateUrl: './photo-slider-monitoring.component.html',
  styleUrl: './photo-slider-monitoring.component.css',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class PhotoSliderMonitoringComponent implements AfterViewInit, OnChanges{
  @Input() photo: any[]; 
  @Output() close = new EventEmitter<void>(); 
  currentSlide: number = 0;


  constructor(private elRef: ElementRef, private sanitizer: DomSanitizer, private renderer: Renderer2, private http: HttpClient) {}
  ngAfterViewInit() {
    this.setupSlider();
    
    // Add mousemove event listener to all images
    const images = this.elRef.nativeElement.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('mousemove', (e) => {
        const offsetX = e.offsetX / e.target.offsetWidth * 100;
        const offsetY = e.offsetY / e.target.offsetHeight * 100;
        img.style.setProperty('--x', `${offsetX}%`);
        img.style.setProperty('--y', `${offsetY}%`);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photo']) {
      this.setupSlider();
      if (this.photo && this.photo.length > 0) {
        this.currentSlide = 0;
      }
    }
  }

  setupSlider() {
    const images = this.elRef.nativeElement.querySelectorAll('img');
    const overlay = this.elRef.nativeElement.querySelector('.overlay');
    let slideIndex = 0;

    if (images.length > 0) {
      images.forEach(img => this.renderer.setStyle(img, 'display', 'none'));
      this.renderer.setStyle(images[slideIndex], 'display', 'block');
    }

    const changeImage = (direction: number) => {
      if (images.length > 0) {
        slideIndex += direction;
        slideIndex = slideIndex < 0 ? images.length - 1 : slideIndex;
        slideIndex = slideIndex > images.length - 1 ? 0 : slideIndex;
    
        this.renderer.setStyle(overlay, 'height', '100%');
    
        setTimeout(() => {
          images.forEach(img => {
            this.renderer.setStyle(img, 'display', 'none');
          });
          this.renderer.setStyle(images[slideIndex], 'display', 'block');
          this.renderer.setStyle(overlay, 'height', '0');
        }, 600);
      }
    };

    this.elRef.nativeElement.querySelector('#prevBtn').addEventListener('click', () => changeImage(-1));
    this.elRef.nativeElement.querySelector('#nextBtn').addEventListener('click', () => changeImage(1));
  }

  closeSlider() {
    this.close.emit();
  }

  changeImage(direction: number) {
    if (this.photo && this.photo.length > 0) {
      this.currentSlide += direction;
      if (this.currentSlide < 0) {
        this.currentSlide = this.photo.length - 1;
      } else if (this.currentSlide >= this.photo.length) {
        this.currentSlide = 0;
      }
    }
  }


}