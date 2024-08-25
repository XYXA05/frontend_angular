import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, Input, Renderer2, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { coolTransition, fadeAnimation } from '../../route-animations';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-build-about-the-project',
  templateUrl: './new-build-about-the-project.component.html',
  styleUrl: './new-build-about-the-project.component.css',
  animations: [fadeAnimation, coolTransition]
})
export class NewBuildAboutTheProjectComponent implements OnInit, AfterViewInit{
  @Input() data: any;
  public showFilterTable: boolean = false;
  public jsonData: any;
  public jsonDataOwner: any;
  public jsonData_id:any;
  public Video: any[] = [];
  public jsonDataOwnerAbout: any;
  public getTermsOfFinancing:any;
  id: string | null = null;
  position: number = 2; // Starting position
  currentPosition: number = 0;
  paragraph: any;
  loading = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute,
    private renderer: Renderer2,private el: ElementRef, private cdr: ChangeDetectorRef, private router: Router,private translate: TranslateService, private meta: Meta, private title: Title
  ){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
    this.translate.setDefaultLang('en');
    // Optionally, use browser language as default
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    this.updateMetaTags(); // Обновляем метатеги после смены языка
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethod();
    this.getMethodOwnerAboutDescription();
    this.getMethodOwnerAbout();
    this.translate.onLangChange.subscribe(() => {
      this.updateMetaTags();
      this.cdr.detectChanges(); // Ensure the template updates with new translations
    });

  
    // Первый вызов при инициализации
    this.updateMetaTags();
  }

  private updateMetaTags(): void {
    if (this.jsonData) {
      this.translate.get('PAGE.TITLE').subscribe(translatedTitle => {
        this.title.setTitle(`${this.jsonData.title} — ${translatedTitle}`);
      });
  
      this.translate.get('PAGE.DESCRIPTION', {
        title: this.jsonData.title,
        line_adres: this.jsonData.line_adres
      }).subscribe(translatedDescription => {
        this.meta.updateTag({ name: 'description', content: translatedDescription });
      });
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  public getMethod(){
    this.http.get(`https://usskkwk.mark-build.com/items/${this.id}`).subscribe((data:any) =>{
      console.log(data);
      this.jsonData = data;
      this.jsonData_id = data.id;
      this.paragraph = data.description_text;

      this.getImagesFromPosition(2);  // Fetch images starting from position 2
      if (data.owner_id) {  // Check if owner_id exists
        this.getMethodOwner(data.owner_id);  // Pass owner_id to getMethodOwner
      }

    }
    );
  }
  public getMethodOwnerAboutDescription(): void {
    this.http.get(`https://usskkwk.mark-build.com/get_items_for_document_description/${this.id}`).subscribe((data: any) => {
      console.log(data);
      this.getTermsOfFinancing = data;
    });
  }
  public getMethodOwner(ownerId: number){
    this.http.get(`https://usskkwk.mark-build.com/user/${ownerId}`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataOwner = data;
      this.cdr.detectChanges(); // Trigger change detection
    }
    );
  }

  public getMethodOwnerAbout(){
    this.http.get(`https://usskkwk.mark-build.com/get_items_for_about/${this.id}`).subscribe((data:any) =>{
      console.log("Owner About Data:", data);
      this.jsonDataOwnerAbout = data;
    }
    );
  }


  replayVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video.currentTime = 0;
    video.play();
  }

  public getImagesFromPosition(position: number){
    this.http.get(`https://b4kg48k.mark-build.com/get_images/${position}/${this.id}`).subscribe((data:any) =>{
      console.log(data);
      this.Video = data;  // Assuming Video will be an array of image paths
    });
  }

  public getVideoUrl(position: number): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image/${position}/${this.id}`);
  }

  updatePosition(position: number): void {
    this.currentPosition = position;
  }
  public getVideoFromPosition(id: number): SafeResourceUrl {
    if (id) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://b4kg48k.mark-build.com/get_image_about/${id}`);
    } else {
      console.error("ID is not available");
      return this.sanitizer.bypassSecurityTrustResourceUrl('');  // Handle the error as needed
    }
  }
  toggleFilterTable(): void {
    this.showFilterTable = !this.showFilterTable;
  }
  
  public onTermSelected(selectedTerm: string | null): void {
    // Handle the selected term here if needed
    // For example, you can log it to the console:
    console.log('Selected Term:', selectedTerm);
  }

  ngAfterViewInit(): void {
    this.initGallerySlider();
  }

  private initGallerySlider(): void {
    const slider: HTMLElement = this.el.nativeElement.querySelector('.gallery');
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    this.renderer.listen(slider, 'mousedown', (e: MouseEvent) => {
      isDown = true;
      this.renderer.addClass(slider, 'active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    this.renderer.listen(slider, 'mouseleave', () => {
      isDown = false;
      this.renderer.removeClass(slider, 'active');
    });

    this.renderer.listen(slider, 'mouseup', () => {
      isDown = false;
      this.renderer.removeClass(slider, 'active');
    });

    this.renderer.listen(slider, 'mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x: number = e.pageX - slider.offsetLeft;
      const SCROLL_SPEED: number = 3;
      const walk: number = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
      const isActive = window.innerWidth <= 2000;
      if (isActive) {
        gallery.classList.add('active');
      } else {
        gallery.classList.remove('active');
      }
    }
  }
}