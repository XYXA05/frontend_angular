import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-map-for-builder',
  templateUrl: './map-for-builder.component.html',
  styleUrl: './map-for-builder.component.css',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class MapForBuilderComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() jsonDataOwner: any;
  map: Map | undefined;
  
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = 'u72wRXIY1BOK8syhN9zb';
  }

  ngAfterViewInit() {
    const initialState = { lng: this.jsonDataOwner.lng, lat: this.jsonDataOwner.lat, zoom: 17.7 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/67b21c41-2d2d-4572-90cf-27db23c84316/style.json?key=u72wRXIY1BOK8syhN9zb',
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      pitch: 55
    });
    new Marker({color: "#FF0000"})
      .setLngLat([initialState.lng, initialState.lat])
      .addTo(this.map);
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}

