import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Marker } from '@maptiler/sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() jsonData: any;
  @Output() markerClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('mapContainer') mapContainerRef!: ElementRef;

  map: any;
  camera: any;
  scene: any;
  renderer: any;
  markers: any[] = [];
  circleMarkers: any[] = [];

  ngAfterViewInit(): void {
    maptilersdk.config.apiKey = 'u72wRXIY1BOK8syhN9zb';
    if (this.mapContainerRef && maptilersdk.Map) {
      this.initializeMap();
    } else {
      console.error('mapContainerRef or maptilersdk.Map is not available.');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['jsonData'] && this.map) {
      this.updateMap();
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  initializeMap(): void {
    this.map = new maptilersdk.Map({
      container: this.mapContainerRef.nativeElement,
      style: 'https://api.maptiler.com/maps/67b21c41-2d2d-4572-90cf-27db23c84316/style.json?key=u72wRXIY1BOK8syhN9zb',
      zoom: 15,
      center: [6.13484, 49.61422],
      pitch: 60,
      antialias: true,
    });

    this.map.on('style.load', () => {
      this.updateMap();
    });
  }

  updateMap(): void {
    if (this.map) {
      // Remove existing markers
      this.markers.forEach(marker => marker.remove());
      this.circleMarkers.forEach(marker => marker.remove());
      this.markers = [];
      this.circleMarkers = [];

      // Add new markers
      for (const data of this.jsonData) {
        this.addMarker(data);
      }

      this.map.on('zoom', () => {
        const zoom = this.map.getZoom();
        const infoElements = document.getElementsByClassName('marker-title');
        const titleElements = document.getElementsByClassName('marker-info');

        for (let i = 0; i < infoElements.length; i++) {
          const infoElement = infoElements[i] as HTMLElement;
          infoElement.style.display = zoom < 14 ? 'none' : 'block';
        }

        for (let i = 0; i < titleElements.length; i++) {
          const titleElement = titleElements[i] as HTMLElement;
          titleElement.style.display = zoom < 12.71 ? 'none' : 'block';
        }

        for (const data of this.jsonData) {
          const layerId = `3d-model-${data.id}`;
          const circleMarker = document.getElementById(`circle-marker-${data.id}`);
          this.map.setLayoutProperty(layerId, 'visibility', zoom < 14 ? 'none' : 'visible');
          if (circleMarker) {
            circleMarker.style.display = zoom < 14 ? 'block' : 'none';
          }
        }
      });
    }
  }

  addMarker(data: any): void {
    const el = document.createElement('div');
    el.className = 'custom-marker';

    const img = document.createElement('div');
    img.style.width = '30px';
    img.style.height = '30px';
    img.style.backgroundSize = '100%';
    img.style.borderRadius = '50%';
    img.style.cursor = 'pointer';

    const info = document.createElement('div');
    info.className = 'marker-info';
    info.style.background = "rgb(255, 255, 255)";
    info.style.padding = "5px";
    info.style.borderRadius = "3px";
    info.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
    info.style.fontSize = "12px";
    info.style.marginTop = "5px";
    info.style.cursor = 'pointer';
    info.innerHTML = `From ${data.price_low} € up to ${data.price_hi} €`;

    const title = document.createElement('div');
    title.className = 'marker-title';
    title.style.width = '90px';
    title.style.height = '30px';
    title.style.cursor = 'pointer';
    title.style.color = 'black';
    title.style.margin = '0px 0px 0px 50px';
    title.style.textShadow = '0 0 2px white';
    title.innerHTML = `${data.line_adres}`;

    el.appendChild(img);
    el.appendChild(info);
    el.appendChild(title);

    const circle = document.createElement('div');
    circle.id = `circle-marker-${data.id}`;
    circle.style.width = '10px';
    circle.style.height = '10px';
    circle.style.backgroundColor = 'red';
    circle.style.borderRadius = '50%';
    circle.style.display = 'none';

    const circleMarker = new Marker({ element: circle, anchor: 'center' })
      .setLngLat([data.lng, data.lat])
      .addTo(this.map);

    const marker = new Marker({ element: el, anchor: 'bottom' })
      .setLngLat([data.lng, data.lat])
      .addTo(this.map);

    marker.getElement().addEventListener('click', () => {
      this.markerClicked.emit(data);
    });

    this.markers.push(marker);
    this.circleMarkers.push(circleMarker);

    this.addCustomLayer(data);
  }

  addCustomLayer(data: any): void {
    const modelOrigin = [data.lng, data.lat];
    const modelAltitude = 0;
    const modelRotate = [Math.PI / 2, 0, 0];
    const modelAsMercatorCoordinate = maptilersdk.MercatorCoordinate.fromLngLat([modelOrigin[0], modelOrigin[1]], modelAltitude);

    const modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
    };

    const customLayer = {
      id: `3d-model-${data.id}`,
      type: 'custom',
      renderingMode: '3d',
      onAdd: (map: any, gl: any) => {
        this.camera = new THREE.PerspectiveCamera();
        this.scene = new THREE.Scene();

        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

        const loader = new GLTFLoader();
        loader.load('assets/uploads_files_2735177_build.glb', (gltf) => {
          gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
              child.material.depthWrite = true;
              child.userData = { name: 'clicked on dish' };
            }
          });
          this.scene.add(gltf.scene);
        });

        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: true,
        });
        this.renderer.autoClear = false;
      },
      render: (gl: any, matrix: any) => {
        const rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
        const rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
        const rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
          .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.state.reset();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };

    if (this.map) {
      this.map.addLayer(customLayer);
    } else {
      console.error('Map is not initialized');
    }
  }
}