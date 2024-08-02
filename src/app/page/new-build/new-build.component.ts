import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { MapComponent } from '../../plagin/map/map.component';
import { DataService } from '../../filter.service';
import { DescriptionItem } from '../../plagin/main-navbar-button/main-navbar-button.component';
import { routeAnimations } from '../../route-animations';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';

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


  loading = false;
  @ViewChildren('videoElem') videoElements!: QueryList<ElementRef>;

  @ViewChild(MapComponent, { static: false }) mapComponent!: MapComponent; // Add "static: false" to avoid the initialization error
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private filterService: DataService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {

    this.getMethod();
    this.filterService.currentFilterData.subscribe(filterData => {
      if (filterData) {
        this.applyFilter(filterData);
      }
    });
    this.loading = true; // Start loading indicator
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
        this.loading = false; // Stop loading indicator after data is loaded
        this.cdr.detectChanges(); // Trigger change detection
      },
      error => {
        console.error('Error fetching data:', error);
        this.loading = false; // Stop loading indicator on error
      });
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
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://usskkwk.mark-build.com/get_image/1/${id}`);
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
    this.filterItems(
      filterData.valueA,
      filterData.valueB,
      filterData.priceMeterA,
      filterData.priceMeterB,
      filterData.priceAllA,
      filterData.priceAllB,
      filterData.typeItems,
      filterData.inputTerm,
      filterData.state,
      filterData.floors,
      filterData.apartmentCondition,
      filterData.constructionStatus,
      filterData.declaredCommissioning,
      filterData.housingCondition
  );
}

filterItems(
  allMeterInItemA?: number,
  allMeterInItemB?: number,
  priceOneMeterA?: number,
  priceOneMeterB?: number,
  allPriceItemsA?: number,
  allPriceItemsB?: number,
  typeItems?: string,
  inputTerm?: string,
  state?: string,
  floors?: string,
  apartmentCondition?: string,
  constructionStatus?: string,
  declaredCommissioning?: string,
  housingCondition?: string
): void {
  let params = new HttpParams();
  if (allMeterInItemA) params = params.append('min_all_meter_in_item', allMeterInItemA.toString());
  if (allMeterInItemB) params = params.append('max_all_meter_in_item', allMeterInItemB.toString());
  if (priceOneMeterA) params = params.append('min_price_one_meter', priceOneMeterA.toString());
  if (priceOneMeterB) params = params.append('max_price_one_meter', priceOneMeterB.toString());
  if (allPriceItemsA) params = params.append('min_all_price_items', allPriceItemsA.toString());
  if (allPriceItemsB) params = params.append('max_all_price_items', allPriceItemsB.toString());
  if (typeItems) params = params.append('type_items', typeItems);
  if (inputTerm) params = params.append('input_term', inputTerm);
  if (state) params = params.append('state', state);
  if (floors) params = params.append('floors', floors);
  if (apartmentCondition) params = params.append('apartment_condition', apartmentCondition);
  if (constructionStatus) params = params.append('construction_status', constructionStatus);
  if (declaredCommissioning) params = params.append('declared_commissioning', declaredCommissioning);
  if (housingCondition) params = params.append('housing_condition', housingCondition);

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
onVideoLoad(): void {
  if (this.videoElements.length === this.jsonData.length) {
    this.loading = false; // Stop loading indicator when all videos are loaded
    this.cdr.detectChanges(); // Trigger change detection
  }
}
}

