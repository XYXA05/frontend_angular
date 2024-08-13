import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { MapComponent } from '../../plagin/map/map.component';
import { DataService } from '../../filter.service';
import { DescriptionItem } from '../../plagin/main-navbar-button/main-navbar-button.component';
import { routeAnimations } from '../../route-animations';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-build',
  templateUrl: './new-build.component.html',
  styleUrl: './new-build.component.css',
  animations: [routeAnimations]
})
export class NewBuildComponent implements OnInit{
  public jsonData: any[] = [];
  originalData: any[] = []; // Store original data
  public filteredItems: DescriptionItem[] = [];
  filteredData: DescriptionItem[] = [];

  public filteredJsonData: any[] = [];

  public Video: any;
  public selectedMarker: any;
  public showFilterTable: boolean = false;
  public showMaps: boolean = false;
  public showItem: boolean = false;
  public showElements: boolean = true; // New property to control the visibility of specific elements

  public currentPage: number = 1;
  public itemsPerPage: number = 10; // Change this to set the number of items per page

  @ViewChild(MapComponent, { static: false }) mapComponent!: MapComponent; // Add "static: false" to avoid the initialization error
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private filterService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.addGTagScript();
    this.getMethod();
    this.filterService.currentFilterData.subscribe(filterData => {
      if (filterData) {
        this.applyFilter(filterData);
      }
    });
  }
  private addGTagScript(): void {
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-04BE3JYN39';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagConfigScript = document.createElement('script');
    gtagConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-04BE3JYN39');
    `;
    document.head.appendChild(gtagConfigScript);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  public getMethod(): void {
    this.http.get<any[]>('https://usskkwk.mark-build.com/items/').subscribe(
      data => {
        this.jsonData = data;
        this.originalData = [...data]; // Keep the original data
        this.filteredJsonData = [...data]; // Initial filtered data is all data
      },
    );
  }

  public getMethods(id: number): void {
    this.http.get(`https://usskkwk.mark-build.com/items/${id}`).subscribe((data: any) => {
      console.log(data);
      this.jsonData = data;
      this.filteredJsonData = data; // Initialize filtered data
    });
  }

  get jsonDataCount(): number {
    return this.filteredJsonData.length;
  }

  replayVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video.currentTime = 0;
    video.play();
  }
  public getVideoUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image/1/${id}`);
  }

  toggleFilterTable(): void {
    this.showFilterTable = !this.showFilterTable;
  }

  toggleMaps(): void {
    this.showMaps = !this.showMaps;
  }

  showMarkerInfo(markerData: any): void {
    this.selectedMarker = null;
    this.cdr.detectChanges(); // Trigger change detection
  
    setTimeout(() => {
      this.selectedMarker = markerData;
      this.cdr.detectChanges(); // Trigger change detection again
    }, 0);
  }
  changePage(page: number): void {
    this.currentPage = page;
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredJsonData.slice(startIndex, endIndex);
  }


  handleFilteredData(filteredData: any[]): void {
    console.log('Received filtered data:', filteredData);
    this.filteredJsonData = filteredData;
    this.applyFilter(filteredData);
  }
  onFilteredDataChanged(filteredData: DescriptionItem[]): void {
    this.filteredData = filteredData;
    // Handle the filtered data as needed
  }

  onFilterApply(): void {
    this.getMethod(); // Refresh the data based on the selected filters
    this.toggleFilterTable(); // Optionally close the filter table after applying filters
  }

  applyFilter(filterData: any): void {
    if (Object.keys(filterData).length === 0) {
        console.warn('No filter data provided.');
        return;
    }

    console.log('Filtering with values:', filterData);
    this.filterItems(filterData);
}

filterItems(filterData: any): void {
    let params = new HttpParams();

    const mapping = {
        valueA: 'min_all_meter_in_item',
        valueB: 'max_all_meter_in_item',
        priceMeterA: 'min_price_one_meter',
        priceMeterB: 'max_price_one_meter',
        priceAllA: 'min_all_price_items',
        priceAllB: 'max_all_price_items',
        typeItems: 'type_items',
        inputTerm: 'input_term',
        state: 'state',
        floors: 'floors',
        apartmentCondition: 'apartment_condition',
        constructionStatus: 'construction_status',
        declaredCommissioning: 'declared_commissioning',
        housingCondition: 'housing_condition'
    };

    Object.keys(filterData).forEach(key => {
        if (filterData[key] !== undefined && filterData[key] !== null) {
            params = params.append(mapping[key] || key, filterData[key].toString());
        }
    });

    this.http.get<DescriptionItem[]>('https://usskkwk.mark-build.com/filter_items', { params }).subscribe(
        (data) => {
            this.filteredJsonData = data;
            this.cdr.detectChanges();
            console.log('Filtered data received:', data);
        },
        (error) => {
            console.error('Error filtering data:', error);
        }
    );
}
}