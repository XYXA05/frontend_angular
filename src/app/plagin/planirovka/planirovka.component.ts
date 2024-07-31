import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
interface DescriptionItem {
  new_build_apartment_id: number;
  type_items: string;
  all_meter_in_item: number;
  price_one_meter: number;
  all_price_items: number;
  input_term: string;  // Add this line
  namber_build_andsection: string;
}
@Component({
  selector: 'app-planirovka',
  templateUrl: './planirovka.component.html',
  styleUrl: './planirovka.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class PlanirovkaComponent implements OnInit {
  @Input() selectedInputTerm: string | null = null;
  @Input() selectedInputHouse: string | null = null;  
  
  @Input() jsonData: any;
  id: string | null = null;
  public jsonDataDescription: DescriptionItem[] = [];
  public roomStatistics: { [key: string]: any } = {};

  public minMaxValues: any = {
    minAllMeter: null,
    maxAllMeter: null,
    minPriceMeter: null,
    maxPriceMeter: null,
    minAllPrice: null,
    maxAllPrice: null
  };
  public isScreenSmall: boolean = window.innerWidth <= 768;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescriptio();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.isScreenSmall = window.innerWidth <= 768;
  }


  public getMethodDescriptio(): void {
    this.http.get<DescriptionItem[]>(`https://www.mark-build.com/get_descriptions_id/${this.id}`).subscribe((data) => {
      this.jsonDataDescription = data;
      this.findMinMaxValues();
      this.calculateRoomStatistics();
    });
  }

  public findMinMaxValues(): void {
    const allMeterValues = this.jsonDataDescription.map(item => item.all_meter_in_item);
    const priceMeterValues = this.jsonDataDescription.map(item => item.price_one_meter);
    const allPriceValues = this.jsonDataDescription.map(item => item.all_price_items);

    this.minMaxValues.minAllMeter = Math.min(...allMeterValues);
    this.minMaxValues.maxAllMeter = Math.max(...allMeterValues);
    this.minMaxValues.minPriceMeter = Math.min(...priceMeterValues);
    this.minMaxValues.maxPriceMeter = Math.max(...priceMeterValues);
    this.minMaxValues.minAllPrice = Math.min(...allPriceValues);
    this.minMaxValues.maxAllPrice = Math.max(...allPriceValues);
  }

  public calculateRoomStatistics(): void {
    const filteredData = this.jsonDataDescription.filter(item => {
      const termMatch = this.selectedInputTerm ? item.input_term === this.selectedInputTerm : true;
      const houseMatch = this.selectedInputHouse ? item.namber_build_andsection === this.selectedInputHouse : true;
      return termMatch && houseMatch;
    });

    this.roomStatistics = {};

    filteredData.forEach(item => {
      const type = item.type_items.split(':')[0].trim();

      if (!this.roomStatistics[type]) {
        this.roomStatistics[type] = {
          low_price_meter: Number.MAX_VALUE,
          hight_price_meter: Number.MIN_VALUE,
          min_meter: Number.MAX_VALUE,
          max_meter: Number.MIN_VALUE,
          min_price: Number.MAX_VALUE,
          max_price: Number.MIN_VALUE,
        };
      }
      this.roomStatistics[type].low_price_meter = Math.min(this.roomStatistics[type].low_price_meter, item.price_one_meter);
      this.roomStatistics[type].hight_price_meter = Math.max(this.roomStatistics[type].hight_price_meter, item.price_one_meter);

      this.roomStatistics[type].min_meter = Math.min(this.roomStatistics[type].min_meter, item.all_meter_in_item);
      this.roomStatistics[type].max_meter = Math.max(this.roomStatistics[type].max_meter, item.all_meter_in_item);
      this.roomStatistics[type].min_price = Math.min(this.roomStatistics[type].min_price, item.all_price_items);
      this.roomStatistics[type].max_price = Math.max(this.roomStatistics[type].max_price, item.all_price_items);
    });
  }

  public getRoomTypes(): string[] {
    return Object.keys(this.roomStatistics);
  }

  // Listen to changes from InputTernComponent
  public onTermSelected(selectedTerm: string | null): void {
    this.selectedInputTerm = selectedTerm;
    this.calculateRoomStatistics();
  }

  public onHouseSelected(selectedHouse: string | null): void {
    this.selectedInputHouse = selectedHouse;
    this.calculateRoomStatistics();
  }
}