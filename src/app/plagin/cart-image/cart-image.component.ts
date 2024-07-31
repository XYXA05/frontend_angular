import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-image',
  template: `
  <div class="card-wrap"
    (mousemove)="handleMouseMove($event)"
    (mouseenter)="handleMouseEnter()"
    (mouseleave)="handleMouseLeave()"
    #card>
    <a [routerLink]="['/construction_monitoring/', jsonData?.id]" *ngFor="let photo of PhotoInformation | slice:0:5">
      <div class="card" 
        [ngStyle]="cardStyle">
        <div>
          <img style='width:165%; height: 320px; object-fit: cover;' [src]="photo.url" alt="monitoring">
        </div>
        <div class="card-bg" [ngStyle]="cardBgTransform"></div>
        <div class="card-info">
          <ng-content select="[slot=header]"></ng-content>
          <ng-content select="[slot=content]"></ng-content>
          <h2 slot="header">{{photo.namber_build_andsection}}</h2>
          <p slot="content" *ngFor="let data of getFilteredDescriptions(photo.namber_build_andsection)">{{data.input_term}}</p>\
        </div>
      </div>
    </a>
  </div>
`,
  styleUrls: ['./cart-image.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class CartImageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('card') cardRef: ElementRef | undefined;
  @Input() jsonData: any;
  public filteredDescriptions: any[] = [];
  public selectedNumberBuildAndSection: string | null = null;
  public PhotoInformation: any[] = [];
  public selectedPhotos: any[] = [];
  public jsonDataDescriptionsOriginal: any[] = [];

  width: number = 0;
  height: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  mouseLeaveDelay: any;
  id: string | null = null;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescriptions(); // Ensure data fetching method is called
    this.getImagesInformation();
  }

  ngAfterViewInit() {
    if (this.cardRef) {
      this.width = this.cardRef.nativeElement.offsetWidth;
      this.height = this.cardRef.nativeElement.offsetHeight;
    }
  }

  ngOnDestroy() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseMove(event: MouseEvent) {
    if (this.cardRef) {
      this.mouseX = event.pageX - this.cardRef.nativeElement.offsetLeft - this.width / 2;
      this.mouseY = event.pageY - this.cardRef.nativeElement.offsetTop - this.height / 2;
    }
  }

  handleMouseEnter() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave() {
    this.mouseLeaveDelay = setTimeout(() => {
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }

  get mousePX(): number {
    return this.mouseX / this.width;
  }

  get mousePY(): number {
    return this.mouseY / this.height;
  }

  get cardStyle() {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get cardBgTransform() {
    const tX = this.mousePX * -40;
    const tY = this.mousePY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    };
  }

  public getMethodDescriptions(): void {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_descriptions_id/${this.id}`).subscribe(data => {
      this.jsonDataDescriptionsOriginal = this.getUniqueData(data, 'namber_build_andsection');
    });
  }

  public getImagesInformation() {
    this.http.get<any>(`https://usskkwk.mark-build.com/get_images_metadata/${this.id}`).subscribe(
      (metadataList: any) => {
        // Assuming metadataList.files is an array of photo metadata
        const files = metadataList.files;

        // Create a map to keep track of the last photo for each number_build_andsection
        const latestPhotosMap = new Map();

        files.forEach((metadata: any) => {
          latestPhotosMap.set(metadata.namber_build_andsection, metadata);
        });

        // Convert the map values to an array to get the latest photos
        this.PhotoInformation = Array.from(latestPhotosMap.values()).map(metadata => ({
          id: metadata.id,
          url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://usskkwk.mark-build.com/get_image_monitoring/${metadata.id}`),
          namber_build_andsection: metadata.namber_build_andsection
        }));
      }
    );
  }

  getFilteredDescriptions(numberBuildAndSection: string): any[] {
    return this.jsonDataDescriptionsOriginal.filter(desc => desc.namber_build_andsection === numberBuildAndSection);
  }

  getUniqueData(data: any[], key: string): any[] {
    const unique = new Set();
    return data.filter(item => {
      const isDuplicate = unique.has(item[key]);
      unique.add(item[key]);
      return !isDuplicate;
    });
  }
}