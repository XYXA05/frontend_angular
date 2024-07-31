import { AfterViewInit, Component, OnInit, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import Knobs from './knods';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
interface DescriptionItem {
  all_meter_in_item: number;
  price_one_meter: number;
  all_price_items: number;
}
@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrl: './range-input.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class RangeInputComponent implements AfterViewInit, OnInit{

  @Input() getMethodDescriptions: any;
  id: string | null = null;

  @Output() rangeValuesChanged = new EventEmitter<{
    valueA: number;
    valueB: number;
    priceMeterA: number;
    priceMeterB: number;
    priceAllA: number;
    priceAllB: number;
  }>();
  public jsonDataDescription: DescriptionItem[] = [];
  public selectedValueA: number = 0;
  public selectedValueB: number = 0;

  public selectedPriceMeterA: number = 0;
  public selectedPriceMeterB: number = 0;

  public selectedPriceAllA: number = 0;
  public selectedPriceAllB: number = 0;

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
    maxAllPrice: null
  };

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescription();
  }

  public getMethodDescription(): void {
    this.http.get<DescriptionItem[]>(`https://usskkwk.mark-build.com/get_descriptions_id/${this.id}`).subscribe((data) => {
      this.jsonDataDescription = data;
      this.findMinMaxValues();
      this.selectedValueA = this.minMaxValues.minAllMeter;
      this.selectedValueB = this.minMaxValues.maxAllMeter;

      this.selectedPriceMeterA = this.minMaxValues.minPriceMeter;
      this.selectedPriceMeterB = this.minMaxValues.maxPriceMeter;

      this.selectedPriceAllA = this.minMaxValues.minAllPrice;
      this.selectedPriceAllB = this.minMaxValues.maxAllPrice;

    });
  }

  public findMinMaxValues(): void {
    const allMeterValues = this.jsonDataDescription.map(item => item.all_meter_in_item);
    const priceMeterValues = this.jsonDataDescription.map(item => item.price_one_meter);
    const priceAllValues = this.jsonDataDescription.map(item => item.all_price_items);

    this.minMaxValues.minAllMeter = Math.min(...allMeterValues);
    this.minMaxValues.maxAllMeter = Math.max(...allMeterValues);

    this.minMaxValues.minPriceMeter = Math.min(...priceMeterValues);
    this.minMaxValues.maxPriceMeter = Math.max(...priceMeterValues);

    this.minMaxValues.minAllPrice = Math.min(...priceAllValues);
    this.minMaxValues.maxAllPrice = Math.max(...priceAllValues);

  }

  ngAfterViewInit(): void {
    const settings = {
      visible: 1,
      theme: {
        background: "rgba(0,0,0,.9)",
      },
      CSSVarTarget: document.querySelector('.range-slider'),
      knobs: [
        // Your knob settings here
      ]
    };

    new Knobs(settings);
  }

  public updateValue(varName: string, event: any, textVarName: string): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + 'м²';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    // Manually trigger change detection
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



  public updatePriceMetrValue(varName: string, event: any, textVarName: string): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + '€';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

  public updatePriceMeterSliderValues(): void {
    const priceRangeAValue = (this.meterrangeA.nativeElement as HTMLInputElement).value;
    const priceRangeBValue = (this.meterrangeB.nativeElement as HTMLInputElement).value;

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



  public updatePriceAllValue(varName: string, event: any, textVarName: string): void {
    const value = (event.target as HTMLInputElement).value;
    (this as any)[varName.replace('--', '')] = value;
    const valueWithSuffix = value + '€';
    (this as any)[textVarName.replace('--text-', '')] = valueWithSuffix;

    const slider = document.querySelector('.range-slider') as HTMLElement;
    if (slider) {
      slider.style.setProperty(varName, value);
      slider.style.setProperty(textVarName, valueWithSuffix);
    }

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

  public updatePriceAllSliderValues(): void {
    const priceRangeMetrAValue = (this.allrangeA.nativeElement as HTMLInputElement).value;
    const priceRangeMetrBValue = (this.allrangeB.nativeElement as HTMLInputElement).value;

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
}