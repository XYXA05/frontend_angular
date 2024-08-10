import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-builders-page',
  templateUrl: './builders-page.component.html',
  styleUrl: './builders-page.component.css'
})
export class BuildersPageComponent implements OnInit {
  public jsonDataOwner: any;
  public jsonDataa: any;
  public getNewsData: any;
  public currentPage: number = 1;
  public itemsPerPage: number = 1; // Change this to set the number of items per page

  @Input() jsonData: any;
  id: string | null = null;


  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodOwner(); // Call getMethodOwner here
    this.getMethod();
    this.getNews();
  }
  public getMethodOwner(){
    this.http.get(`https://usskkwk.mark-build.com/user/${this.id}`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataOwner = data;
    }
    );
  }

  public getNews() {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_news_id/${this.id}`).subscribe((data:any) => {
      this.getNewsData = data;
    });
  }

  public getMethod() {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_items/${this.id}`).subscribe((data:any) => {
      this.jsonDataa = data;
    });
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
  get jsonDataCount(): number {
    return this.jsonDataa.length;
  }
    // Calculate the starting index and ending index of the items to be displayed
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  
  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.jsonDataCount - 1);
  }
  
    // Change the current page
  changePage(page: number): void {
    this.currentPage = page;
  }
}