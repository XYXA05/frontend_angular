import { HttpClient } from '@angular/common/http';
import { Component,Renderer2, ElementRef, ViewChild,AfterViewInit, ViewEncapsulation, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-builder',
  templateUrl: './cart-builder.component.html',
  styleUrl: './cart-builder.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class CartBuilderComponent implements AfterViewInit, OnInit{
  public showFilterTable: boolean = false;
  @Input() jsonDataOwner: any;



  
  target = {
    clicked: 0,
    currentFollowers: 90,
  };

  @ViewChild('btn', { static: true }) btn!: ElementRef;
  @ViewChild('fw', { static: true }) fw!: ElementRef;

  constructor(private renderer: Renderer2, private http: HttpClient, private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {

    
  }
  ngAfterViewInit() {
    this.setupInitialValues();
  }

  setupInitialValues() {
    this.renderer.setProperty(this.btn.nativeElement, 'innerHTML', 'Follow <i class="fas fa-user-plus"></i>');
    this.renderer.setProperty(this.fw.nativeElement, 'textContent', this.target.currentFollowers.toString());
  }


  replayVideo(event: Event): void {
    const video = event.target as HTMLVideoElement; 
    video.currentTime = 0;
    video.play();
  }
  toggleFilterTable(): void {
    this.showFilterTable = !this.showFilterTable;
  }

  public getVideoOwnerUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://127.0.0.1:8000/get_image_owner/1/${id}`);
  }

  follow() {
    this.target.clicked += 1;
    this.renderer.setProperty(this.btn.nativeElement, 'innerHTML', 'Following <i class="fas fa-user-times"></i>');

    if (this.target.clicked % 2 === 0) {
      this.target.currentFollowers -= 1;
      this.renderer.setProperty(this.btn.nativeElement, 'innerHTML', 'Follow <i class="fas fa-user-plus"></i>');
    } else {
      this.target.currentFollowers += 1;
    }

    this.renderer.setProperty(this.fw.nativeElement, 'textContent', this.target.currentFollowers.toString());
    this.renderer.addClass(this.btn.nativeElement, 'following');
  }
}