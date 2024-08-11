import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-construction-monitoring',
  templateUrl: './construction-monitoring.component.html',
  styleUrl: './construction-monitoring.component.css',
  encapsulation: ViewEncapsulation.Emulated, // Default

})
export class ConstructionMonitoringComponent implements OnInit{
  public showFilterTable: boolean = false;
  public showImage: boolean = false;
  public showitem: boolean = false;
  public showAllItems: boolean = true;
  public jsonDataDescriptionsOriginal: any[] = [];
  public jsonDataa: any;
  public jsonDataOwner: any;
  public filteredDescriptions: any[] = [];
  public selectedNumberBuildAndSection: string | null = null;
  public PhotoInformation: any[] = [];
  public selectedPhotos: any[] = [];


  id: string | null = null;

  @Input() jsonData: any; 

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescriptions();  
    this.getMethod();

  }

  public getMethod(){
    this.http.get(`https://usskkwk.mark-build.com/items/${this.id}`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataa = data;
      if (data.owner_id) {  // Check if owner_id exists
        this.getMethodOwner(data.owner_id);  // Pass owner_id to getMethodOwner
      }
    }
    );
  }
  public getMethodOwner(ownerId: number){
    this.http.get(`https://usskkwk.mark-build.com/user/${ownerId}`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataOwner = data;
    }
    );
  }
  public getMethodDescriptions(): void {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_descriptions_id/${this.id}`).subscribe(data => {
      this.jsonDataDescriptionsOriginal = this.getUniqueData(data, 'namber_build_andsection');
      if (this.jsonDataDescriptionsOriginal.length > 0) {
        this.selectedNumberBuildAndSection = this.jsonDataDescriptionsOriginal[0].namber_build_andsection;
        this.filterData(this.selectedNumberBuildAndSection);
      }
    });
  }

  public getImagesInformation(numberBuildAndSection: string, useFilter: boolean = true) {
    this.http.get<any>(`https://b4kg48k.mark-build.com/get_images_metadata/${this.id}`).subscribe(
      (metadataList: any) => {
        this.PhotoInformation = [];
        let filteredMetadata = metadataList.files;

        if (numberBuildAndSection) {
          filteredMetadata = filteredMetadata.filter((metadata: any) => metadata.namber_build_andsection === numberBuildAndSection);
        }

        if (useFilter) {
          const latestPhotos = filteredMetadata.reduce((acc: any, curr: any) => {
            const key = curr.position;
            if (!acc[key] || new Date(curr.date) > new Date(acc[key].date)) {
              acc[key] = curr;
            }
            return acc;
          }, {});

          filteredMetadata = Object.values(latestPhotos);
        }

        filteredMetadata.forEach((metadata: any) => {
          this.PhotoInformation.push({
            id: metadata.id,
            url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image_monitoring/${metadata.id}`),
            date: metadata.date,
            position: metadata.position,
            namber_build_andsection: metadata.namber_build_andsection
          });
        });
        if (this.showFilterTable) {
          this.selectedPhotos = this.PhotoInformation.length > 0 ? this.PhotoInformation.slice(0, 3) : [];
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching metadata:', error);
        console.log('Response status:', error.status);
        console.log('Response body:', error.error);
      }
    );
  }

  filterData(numberBuildAndSection: string) {
    this.selectedNumberBuildAndSection = numberBuildAndSection;
    const filtered = this.jsonDataDescriptionsOriginal.filter(desc => desc.namber_build_andsection === numberBuildAndSection);
    this.filteredDescriptions = this.getUniqueData(filtered, 'input_term');
    this.getImagesInformation(numberBuildAndSection);
  }


  getUniqueData(data: any[], key: string): any[] {
    const unique = new Set();
    return data.filter(item => {
      const isDuplicate = unique.has(item[key]);
      unique.add(item[key]);
      return !isDuplicate;
    });
  }
  toggleFilterTable(position: string): void {
    this.showFilterTable = !this.showFilterTable;
    this.showAllItems = !this.showFilterTable;
  
    if (this.showFilterTable) {
      this.getImagesInformation(this.selectedNumberBuildAndSection, false); // Call with filter disabled
  
      // Filter photos by the specific position before opening the slider
      this.selectedPhotos = this.PhotoInformation.filter(photo => photo.position === position);
    } else {
      this.selectedPhotos = [];
    }
  }
  closePhotoSlider(): void {
    this.showFilterTable = false;
    this.showAllItems = true;
    this.selectedPhotos = [];
    this.resetFilters(); // Reset filters and restore initial data
  }
  resetFilters(): void {
    this.filteredDescriptions = [];
    this.selectedNumberBuildAndSection = this.jsonDataDescriptionsOriginal.length > 0 ? this.jsonDataDescriptionsOriginal[0].namber_build_andsection : null;
    if (this.selectedNumberBuildAndSection) {
      this.filterData(this.selectedNumberBuildAndSection);
    }
  }
  toggleMaps(): void {
    this.showImage = !this.showImage;
  }

  toggleitem(): void {
    this.showitem = !this.showitem;
  }
}