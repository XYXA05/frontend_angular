import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation, Input, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, SecurityContext, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { fadeAnimation } from '../../route-animations';

@Component({
  selector: 'app-aerial-survey-360',
  templateUrl: './aerial-survey-360.component.html',
  styleUrl: './aerial-survey-360.component.css',
  encapsulation: ViewEncapsulation.Emulated, // Default
  animations: [fadeAnimation]
})

export class AerialSurvey360Component implements OnInit, AfterViewInit{
  @ViewChild('panoramaCanvas') panoramaCanvas!: ElementRef<HTMLCanvasElement>;
  public jsonDataa: any;
  public jsonDataOwner: any;
  public PhotoInformation: any[] = [];
  public selectedPhotoId: number | null = null; // Initialize the selectedPhotoId

  id: string | null = null;
  @Input() jsonData: any; 

  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private controls!: OrbitControls;
  private cylinder!: THREE.Mesh;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethod();
    this.getImagesInformation();
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize(): void {
    if (this.camera && this.renderer) {
      const canvas = this.panoramaCanvas.nativeElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
  }

  public getMethod() {
    this.http.get(`https://www.mark-build.com/items/${this.id}/`).subscribe((data: any) => {
      console.log(data);
      this.jsonDataa = data;
      if (data.owner_id) {  // Check if owner_id exists
        this.getMethodOwner(data.owner_id);  // Pass owner_id to getMethodOwner
      }
    });
  }

  public getMethodOwner(ownerId: number) {
    this.http.get(`https://www.mark-build.comuser/${ownerId}/`).subscribe((data: any) => {
      console.log(data);
      this.jsonDataOwner = data;
    });
  }

  getImagesInformation(): void {
    this.http.get<any>(`https://www.mark-build.com/get_image_description_360_metadata/${this.id}`).subscribe(
      (metadataList: any) => {
        this.PhotoInformation = metadataList.files.map((metadata: any) => ({
          id: metadata.id,
          url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.mark-build.com/get_image_description_360/${metadata.id}`),
          date: metadata.date,
        }));
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching metadata:', error);
      }
    );
  }

  onPanoramaChange(event: Event): void {
    const selectedId = parseInt((event.target as HTMLSelectElement).value, 10);
    const selectedPhoto = this.PhotoInformation.find(photo => photo.id === selectedId);
    
    if (selectedPhoto && selectedPhoto.url) {
      const selectedUrl = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, selectedPhoto.url);
      if (selectedUrl) {
        this.renderPanorama(this.panoramaCanvas.nativeElement, selectedUrl);
      } else {
        console.error('Selected URL is null:', selectedPhoto.url);
      }
    } else {
      console.error('Selected photo not found or URL is null:', selectedId);
    }
  }

  private renderPanorama(canvas: HTMLCanvasElement, photoUrl: string) {
    // Clear previous objects
    if (this.scene) {
      this.scene.clear();
    }

    // Apply styles to the canvas
    canvas.style.height = '100%';
    canvas.style.width = '100%';
    canvas.style.objectFit = 'cover';

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 0); // Position the camera at the center

    this.scene = new THREE.Scene();
    const geometry = new THREE.CylinderGeometry(500, 500, 1000, 60, 1, true);
    geometry.scale(-1, 1, 1); // Invert the geometry on the x-axis so the interior is visible

    const textureLoader = new THREE.TextureLoader();
    console.log('Loading texture from URL:', photoUrl);
    textureLoader.load(photoUrl,
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.repeat.x = -1; // Mirror the texture horizontally
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        this.cylinder = new THREE.Mesh(geometry, material);
        this.scene.add(this.cylinder);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.minDistance = 1;
        this.controls.maxDistance = 800;
        this.controls.target.set(0, 0, 0); // Ensure the controls target the center

        const animate = () => {
          requestAnimationFrame(animate);
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
        };
        animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.log('An error happened while loading the texture', error);
      }
    );
  }
}