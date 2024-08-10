import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-builders',
  templateUrl: './builders.component.html',
  styleUrl: './builders.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class BuildersComponent implements OnInit{
  public jsonDataOwner: any[] = []; // Initialize as an empty array
  public jsonDataMap: { [key: string]: any[] } = {};
  id: string | null = null;
  position: number = 1; 

  public currentPage: number = 1;
  public itemsPerPage: number = 5;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.getMethodOwner(); // Call getMethodOwner here

  }
  public getMethodOwner(): void {
    this.http.get('https://usskkwk.mark-build.com/userss/').subscribe((data: any) => {
      this.jsonDataOwner = data;

      // Load data for each ddata.id
      this.jsonDataOwner.forEach(ddata => {
        this.loadMethod(ddata.id);
      });
      this.cdr.detectChanges(); // Manually trigger change detection

    });
  }

  public loadMethod(id: string): void {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_items/${id}`).subscribe(data => {
      if (Array.isArray(data) && data.length > 0 && data[0].position) { // Check if data is an array and contains 'position' property
        this.jsonDataMap[id] = data;
      }
    });
  }


  get jsonDataCount(): number {
    let totalLength = 0;
    for (const key in this.jsonDataMap) {
      if (this.jsonDataMap.hasOwnProperty(key)) {
        totalLength += this.jsonDataMap[key].length;
      }
    }
    return totalLength;
  }

  replayVideo(event: Event): void {
    const video = event.target as HTMLVideoElement; 
    video.currentTime = 0;
    video.play();
  }

  public getVideoUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image/1/${id}`);
  }
  public getVideoOwnerUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image_owner/1/${id}`);
  }


  changePage(page: number): void {
    this.currentPage = page;
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.jsonDataOwner.slice(startIndex, endIndex);
  }
}