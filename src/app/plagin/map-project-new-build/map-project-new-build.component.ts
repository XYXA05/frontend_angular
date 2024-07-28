import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-map-project-new-build',
  templateUrl: './map-project-new-build.component.html',
  styleUrl: './map-project-new-build.component.css'
})
export class MapProjectNewBuildComponent implements AfterViewInit, OnDestroy {
  @Input() jsonData: any;
  @Output() markerClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('mapContainer') mapContainerRef!: ElementRef;

  map: any; // Adjust the type according to your setup
  camera: any;
  scene: any;
  renderer: any;

  ngAfterViewInit(): void {
    maptilersdk.config.apiKey = 'u72wRXIY1BOK8syhN9zb';

    // Check if mapContainerRef is available and maptilersdk is loaded
    if (this.mapContainerRef && typeof maptilersdk.Map !== 'undefined') {
      this.initializeMap();
    } else {
      console.error('mapContainerRef or maptilersdk.Map is not available.');
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
      zoom: 17.7,
      center: [this.jsonData.lng, this.jsonData.lat],
      pitch: 60,
      antialias: true,
    });

    this.map.on('style.load', () => {
      this.initCustomLayer();
    });
  }


  initCustomLayer(): void {
    const modelOrigin = [this.jsonData.lng, this.jsonData.lat];
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
      id: '3d-model',
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
      onClick: (event: any) => {
        const mouse = new THREE.Vector2();
        const canvas = this.map.getCanvas();
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);
  
        const intersects = raycaster.intersectObjects(this.scene.children, true);
  
        if (intersects.length > 0) {
          const clickedObject = intersects[0].object;
          const objectName = clickedObject.userData['name'];
          alert('Clicked object: ' + objectName);
        }
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
  
    this.map.addLayer(customLayer);
  }
}