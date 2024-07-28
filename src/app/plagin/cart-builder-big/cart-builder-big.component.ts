import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-builder-big',
  templateUrl: './cart-builder-big.component.html',
  styleUrl: './cart-builder-big.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class CartBuilderBigComponent {
  public showFilterTable: boolean = false;

  @Input() jsonDataOwner: any;

  constructor(private renderer: Renderer2, private http: HttpClient, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {

  }

  replayVideo(event: Event): void {
    const video = event.target as HTMLVideoElement; 
    video.currentTime = 0;
    video.play();
  }

  public getVideoOwnerUrl(id: string): SafeResourceUrl {
    // Assuming your backend serves the video at a URL like this:
    const videoUrl = `http://127.0.0.1:8000/get_image_owner/1/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  toggleFilterTable(): void {
    this.showFilterTable = !this.showFilterTable;
  }
}
