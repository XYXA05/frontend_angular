import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import Knobs from './knods';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../filter.service';

export interface DescriptionItem {
  all_meter_in_item: number;
  price_one_meter: number;
  all_price_items: number;
  type_items: string;
  input_term: string;
  state: string;
  floors: string;
  apartment_condition: string;
  construction_status?: string;
  declared_commissioning?: string;
  housing_condition?: string;
}

@Component({
  selector: 'app-main-navbar-button',
  templateUrl: './main-navbar-button.component.html',
  styleUrls: ['./main-navbar-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // Default
})
export class MainNavbarButtonComponent implements AfterViewInit, OnInit {
  public jsonDataDescription: DescriptionItem[] = [];
  public jsonDataDescriptionsOriginal: DescriptionItem[] = [];
  public jsonData: any[] = [];
  public filteredData: DescriptionItem[] = [];
  @Output() filterChanged = new EventEmitter<any>();

  public selectedValueA: number = 0;
  public selectedValueB: number = 0;
  public selectedPriceMeterA: number = 0;
  public selectedPriceMeterB: number = 0;
  public selectedPriceAllA: number = 0;
  public selectedPriceAllB: number = 0;

  public uniqueTypeItems: string[] = [];
  public uniqueDeclaredCommissioning: string[] = [];
  public uniqueConstructionStatus: string[] = [];
  public uniqueHousingCondition: string[] = [];
  public uniqueNumberOfStoreys: string[] = [];

  public selectedUniqueDeclaredCommissioning: string | null = null;
  public selectedUniqueConstructionStatus: string | null = null;
  public selectedUniqueHousingCondition: string | null = null;
  public selectedUniqueTypeItems: string | null = null;
  public selectedUniqueNumberOfStoreys: string | null = null;

  public selectedRangeValues = {
    valueA: 0,
    valueB: 0,
    priceMeterA: 0,
    priceMeterB: 0,
    priceAllA: 0,
    priceAllB: 0,
  };

  @ViewChild('rangeA') rangeA!: ElementRef;
  @ViewChild('rangeB') rangeB!: ElementRef;
  @ViewChild('meterrangeA') meterrangeA!: ElementRef;
  @ViewChild('meterrangeB') meterrangeB!: ElementRef;
  @ViewChild('allrangeA') allrangeA!: ElementRef;
  @ViewChild('allrangeB') allrangeB!: ElementRef;

  public minMaxValues: any = {
    minAllMeter: null,
    maxAllMeter: null,
    minPriceMeter: null,
    maxPriceMeter: null,
    minAllPrice: null,
    maxAllPrice: null,
  };

  @Output() rangeValuesChanged = new EventEmitter<{
    valueA: number;
    valueB: number;
    priceMeterA: number;
    priceMeterB: number;
    priceAllA: number;
    priceAllB: number;
  }>();

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private filterService: DataService
  ) {}

  ngOnInit(): void {
    this.getMethodDescription();
    this.getMethod();
  }

  public filterData(): DescriptionItem[] {
    console.log('Filtering with values:', this.selectedRangeValues, this.selectedUniqueTypeItems, this.selectedUniqueDeclaredCommissioning);
    
    return this.jsonDataDescription.filter(item => {
      return (
        item.all_meter_in_item >= this.selectedRangeValues.valueA &&
        item.all_meter_in_item <= this.selectedRangeValues.valueB &&
        item.all_price_items >= this.selectedPriceAllA &&
        item.all_price_items <= this.selectedPriceAllB &&
        item.price_one_meter >= this.selectedPriceMeterA &&
        item.price_one_meter <= this.selectedPriceMeterB &&
        (this.selectedUniqueTypeItems ? item.type_items === this.selectedUniqueTypeItems : true) &&
        (this.selectedUniqueDeclaredCommissioning ? item.input_term === this.selectedUniqueDeclaredCommissioning : true) &&
        (this.selectedUniqueConstructionStatus ? item.state === this.selectedUniqueConstructionStatus : true) &&
        (this.selectedUniqueHousingCondition ? item.apartment_condition === this.selectedUniqueHousingCondition : true) &&
        (this.selectedUniqueNumberOfStoreys ? item.floors === this.selectedUniqueNumberOfStoreys : true)
      );
    });
  }

  public getMethod(): void {
    this.http.get<any[]>('https://www.mark-build.com/items/').subscribe(
      (data: any[]) => {
        console.log(data);
        this.jsonData = data;
        this.uniqueHousingCondition = [
          ...new Set<string>(data.map((item: any) => item.apartment_condition)),
        ];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  public getMethodDescription(): void {
    this.http.get<DescriptionItem[]>('https://www.mark-build.com/get_alll_plans/').subscribe(
      (data) => {
        this.jsonDataDescription = data;
        this.jsonDataDescriptionsOriginal = data.slice(); // Save the original data
        this.findMinMaxValues();
        this.uniqueTypeItems = [
          ...new Set<string>(data.map((item: any) => item.type_items)),
        ];
        this.uniqueDeclaredCommissioning = [
          ...new Set<string>(data.map((item: any) => item.input_term)),
        ];
        this.uniqueConstructionStatus = [
          ...new Set<string>(data.map((item: any) => item.state)),
        ];
        this.uniqueNumberOfStoreys = [
          ...new Set<string>(data.map((item: any) => item.floors)),
        ];

        this.selectedValueA = this.minMaxValues.minAllMeter;
        this.selectedValueB = this.minMaxValues.maxAllMeter;

        this.selectedPriceMeterA = this.minMaxValues.minPriceMeter;
        this.selectedPriceMeterB = this.minMaxValues.maxPriceMeter;

        this.selectedPriceAllA = this.minMaxValues.minAllPrice;
        this.selectedPriceAllB = this.minMaxValues.maxAllPrice;

        this.selectedRangeValues = {
          valueA: this.selectedValueA,
          valueB: this.selectedValueB,
          priceMeterA: this.selectedPriceMeterA,
          priceMeterB: this.selectedPriceMeterB,
          priceAllA: this.selectedPriceAllA,
          priceAllB: this.selectedPriceAllB,
        };
      },
      (error) => {
        console.error('Error fetching description data:', error);
      }
    );
  }

  public findMinMaxValues(): void {
    const allMeterValues = this.jsonDataDescription.map(
      (item) => item.all_meter_in_item
    );
    const priceMeterValues = this.jsonDataDescription.map(
      (item) => item.price_one_meter
    );
    const priceAllValues = this.jsonDataDescription.map(
      (item) => item.all_price_items
    );

    this.minMaxValues.minAllMeter = Math.min(...allMeterValues);
    this.minMaxValues.maxAllMeter = Math.max(...allMeterValues);

    this.minMaxValues.minPriceMeter = Math.min(...priceMeterValues);
    this.minMaxValues.maxPriceMeter = Math.max(...priceMeterValues);

    this.minMaxValues.minAllPrice = Math.min(...priceAllValues);
    this.minMaxValues.maxAllPrice = Math.max(...priceAllValues);
  }


  public updateRangeValue(propertyName: string, event: any) {
    const value = parseInt(event.target.value, 10);
    switch (propertyName) {
        case '--value-a':
            this.selectedRangeValues.valueA = Math.min(value, this.selectedRangeValues.valueB);
            break;
        case '--value-b':
            this.selectedRangeValues.valueB = Math.max(value, this.selectedRangeValues.valueA);
            break;
        case '--priceMeterA':
            this.selectedRangeValues.priceMeterA = Math.min(value, this.selectedRangeValues.priceMeterB);
            break;
        case '--priceMeterB':
            this.selectedRangeValues.priceMeterB = Math.max(value, this.selectedRangeValues.priceMeterA);
            break;
        case '--priceAllA':
            this.selectedRangeValues.priceAllA = Math.min(value, this.selectedRangeValues.priceAllB);
            break;
        case '--priceAllB':
            this.selectedRangeValues.priceAllB = Math.max(value, this.selectedRangeValues.priceAllA);
            break;
    }
    this.applyFilters();
  }
  ngAfterViewInit(): void {
    const settings = {
      visible: 1,
      theme: {
        background: 'rgba(0,0,0,.9)',
      },
      CSSVarTarget: document.querySelector('.range-slider'),
      knobs: [
        // Your knob settings here
      ],
    };

    new Knobs(settings);


    this.setInitialRangeValues();
    this.updateSliderValues();
    this.updatePriceMeterSliderValues();
    this.updatePriceAllSliderValues();
  }
  private setInitialRangeValues(): void {
    this.selectedRangeValues = {
        valueA: parseInt(this.rangeA.nativeElement.value, 10),
        valueB: parseInt(this.rangeB.nativeElement.value, 10),
        priceMeterA: parseInt(this.meterrangeA.nativeElement.value, 10),
        priceMeterB: parseInt(this.meterrangeB.nativeElement.value, 10),
        priceAllA: parseInt(this.allrangeA.nativeElement.value, 10),
        priceAllB: parseInt(this.allrangeB.nativeElement.value, 10),
    };
  }
  public updateValue(
    varName: string,
    event: any,
    textVarName: string
  ): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + 'м²';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    this.cdr.detectChanges();
  }

  public updateSliderValues(): void {
    const rangeAValue = (this.rangeA.nativeElement as HTMLInputElement).value;
    const rangeBValue = (this.rangeB.nativeElement as HTMLInputElement).value;

    this.selectedValueA = Number(rangeAValue);
    this.selectedValueB = Number(rangeBValue);

    this.rangeValuesChanged.emit({
      valueA: this.selectedValueA,
      valueB: this.selectedValueB,
      priceMeterA: this.selectedPriceMeterA,
      priceMeterB: this.selectedPriceMeterB,
      priceAllA: this.selectedPriceAllA,
      priceAllB: this.selectedPriceAllB,
    });
  }

  public updatePriceMetrValue(
    varName: string,
    event: any,
    textVarName: string
  ): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + '€';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    this.cdr.detectChanges();
  }

  public updatePriceMeterSliderValues(): void {
    const priceRangeAValue = (this.meterrangeA.nativeElement as HTMLInputElement)
      .value;
    const priceRangeBValue = (this.meterrangeB.nativeElement as HTMLInputElement)
      .value;

    this.selectedPriceMeterA = Number(priceRangeAValue);
    this.selectedPriceMeterB = Number(priceRangeBValue);
    this.rangeValuesChanged.emit({
      valueA: this.selectedValueA,
      valueB: this.selectedValueB,
      priceMeterA: this.selectedPriceMeterA,
      priceMeterB: this.selectedPriceMeterB,
      priceAllA: this.selectedPriceAllA,
      priceAllB: this.selectedPriceAllB,
    });
  }

  public updatePriceAllValue(
    varName: string,
    event: any,
    textVarName: string
  ): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + '€';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    this.cdr.detectChanges();
  }

  public updatePriceAllSliderValues(): void {
    const priceRangeMetrAValue = (this.allrangeA.nativeElement as HTMLInputElement)
      .value;
    const priceRangeMetrBValue = (this.allrangeB.nativeElement as HTMLInputElement)
      .value;

    this.selectedPriceAllA = Number(priceRangeMetrAValue);
    this.selectedPriceAllB = Number(priceRangeMetrBValue);

    this.rangeValuesChanged.emit({
      valueA: this.selectedValueA,
      valueB: this.selectedValueB,
      priceMeterA: this.selectedPriceMeterA,
      priceMeterB: this.selectedPriceMeterB,
      priceAllA: this.selectedPriceAllA,
      priceAllB: this.selectedPriceAllB,
    });
  }
  applyFilters(): void {
    const filterData = {
        valueA: this.selectedRangeValues.valueA,
        valueB: this.selectedRangeValues.valueB,
        priceMeterA: this.selectedRangeValues.priceMeterA,
        priceMeterB: this.selectedRangeValues.priceMeterB,
        priceAllA: this.selectedRangeValues.priceAllA,
        priceAllB: this.selectedRangeValues.priceAllB,
        typeItems: this.selectedUniqueTypeItems,
        inputTerm: this.selectedUniqueDeclaredCommissioning,
        state: this.selectedUniqueConstructionStatus,
        floors: this.selectedUniqueNumberOfStoreys,
        housingCondition: this.selectedUniqueHousingCondition,
    };
    this.filterChanged.emit(filterData);
  }
  public updateSelectedUniqueDeclaredCommissioning(value: string | null): void {
    this.selectedUniqueDeclaredCommissioning = value;
    this.applyFilters();
  }

  public updateSelectedUniqueConstructionStatus(value: string | null): void {
    this.selectedUniqueConstructionStatus = value;
    this.applyFilters();
  }

  public updateSelectedUniqueHousingCondition(value: string | null): void {
    this.selectedUniqueHousingCondition = value;
    this.applyFilters();
  }

  public updateSelectedUniqueTypeItems(value: string | null): void {
    this.selectedUniqueTypeItems = value;
    this.applyFilters();
  }

  public updateSelectedUniqueNumberOfStoreys(value: string | null): void {
    this.selectedUniqueNumberOfStoreys = value;
    this.applyFilters();
  }

  onRangeValuesChange(): void {
    this.rangeValuesChanged.emit(this.selectedRangeValues);
    this.applyFilters();
  }

}