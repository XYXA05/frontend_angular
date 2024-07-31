import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-build-planning',
  templateUrl: './new-build-planning.component.html',
  styleUrl: './new-build-planning.component.scss',
})
export class NewBuildPlanningComponent implements OnInit{
  public jsonDataDescriptions: any[] = [];
  public jsonDataDescriptionsOriginal: any[] = [];
  public uniqueFeaturesItems: string[] = [];
  public uniqueTypeItems: string[] = [];
  public jsonDataOwner: string[] = [];
  public selectedTypeItem: string | null = null;
  public selectedFeaturesItem: string | null = null;
  public showFilterTable: boolean = false;
  public selectedId: string | null = null;  // Add this line
  public jsonDataDescriptionsOriginalForId: any;

  @Input() jsonData: any;
  id: string | null = null;
  @Input() selectedInputTerm: string | null = null;
  @Input() selectedInputHouse: string | null = null;

  public selectedRangeValues: {
    valueA: number;
    valueB: number;
    priceMeterA: number;
    priceMeterB: number;
    priceAllA: number;
    priceAllB: number;
  } = {
    valueA: 0,
    valueB: 0,
    priceMeterA: 0,
    priceMeterB: 0,
    priceAllA: 0,
    priceAllB: 0,
  };
  public showFilterTables: boolean = false;

  public showMapss: boolean = false;
  public showItemss: boolean = false;
  public showElementss: boolean = true; // New property to control the visibility of specific elements
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescriptions();
    this.getMethodOwner()
  }


  onRangeValuesChanged(values: any): void {
    this.selectedRangeValues = values;
    this.filterData();
  }

  public getMethodDescriptions(): void {
    this.http.get<any[]>(`https://usskkwk.mark-build.com/get_descriptions_id/${this.id}`).subscribe(data => {
      this.jsonDataDescriptionsOriginal = data;
      this.jsonDataDescriptions = [...this.jsonDataDescriptionsOriginal];
      this.uniqueTypeItems = [...new Set<string>(data.map((item: any) => item.type_items))];
      this.uniqueFeaturesItems = [...new Set<string>(data.map((item: any) => item.Features))];
    });
  }
  public getMethodOwner(){
    this.http.get(`https://usskkwk.mark-build.com/user/1/`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataOwner = data;
      this.cdr.detectChanges();
    }
    );
  }

  public getPhotoUrl(id: string | undefined): SafeResourceUrl {
    if (!id || id === 'undefined') {
      console.error("ID is undefined");
      return '';
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://usskkwk.mark-build.com/get_image_description/${id}`);
  }



  filterData(): void {
    this.jsonDataDescriptions = this.jsonDataDescriptionsOriginal.filter(
      (item) =>
        (!this.selectedTypeItem || item.type_items === this.selectedTypeItem) &&
        (!this.selectedFeaturesItem || item.Features === this.selectedFeaturesItem) &&
        (!this.selectedInputTerm || item.input_term === this.selectedInputTerm) &&
        (!this.selectedInputHouse || item.namber_build_andsection === this.selectedInputHouse) &&
        item.all_meter_in_item >= this.selectedRangeValues.valueA &&
        item.all_meter_in_item <= this.selectedRangeValues.valueB &&
        item.price_one_meter >= this.selectedRangeValues.priceMeterA &&
        item.price_one_meter <= this.selectedRangeValues.priceMeterB &&
        item.all_price_items >= this.selectedRangeValues.priceAllA &&
        item.all_price_items <= this.selectedRangeValues.priceAllB
    );
  }
  resetFilters(): void {
    this.selectedTypeItem = null;
    this.selectedFeaturesItem = null;
    this.selectedInputTerm = null;
    this.selectedInputHouse = null;
    this.jsonDataDescriptions = [...this.jsonDataDescriptionsOriginal];

  }

  public onTermSelected(selectedTerm: string | null): void {
    this.selectedInputTerm = selectedTerm;
    this.filterData();
  }

  public onHouseSelected(selectedHouse: string | null): void {
    this.selectedInputHouse = selectedHouse;
    this.filterData();
  }

  toggleFilterTable(id: string | null): void {
    this.selectedId = id;
    this.showFilterTable = !this.showFilterTable;

    if (this.selectedId) {
      this.jsonDataDescriptionsOriginalForId = this.jsonDataDescriptions.find(item => item.id === this.selectedId);
    }
  }



  toggleFilterTables(): void {
    this.showFilterTables = !this.showFilterTables;
  }
  toggleMapss(): void {
    this.showMapss = !this.showMapss;
  }
  toggleElementss(): void { // New method to toggle elements visibility
    this.showElementss = !this.showElementss;
  }
}


