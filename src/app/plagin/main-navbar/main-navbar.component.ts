import { AfterViewInit, Component,  ElementRef,  OnInit,  ViewChild,  ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class MainNavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebarOpen', { static: false }) sidebarOpen!: ElementRef;
  @ViewChild('sidebarClose', { static: false }) sidebarClose!: ElementRef;
  @ViewChild('nav', { static: false }) nav!: ElementRef;
  @ViewChild('modeToggle', { static: false }) modeToggle!: ElementRef;
  @ViewChild('searchToggle', { static: false }) searchToggle!: ElementRef;

  constructor(private translate: TranslateService) { }
  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
  }
  ngOnInit(): void {
    const body = document.querySelector("body");

    if (body) {
      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
      }
    }
  }

  ngAfterViewInit(): void {
    const body = document.querySelector("body");

    if (this.modeToggle) {
      this.modeToggle.nativeElement.addEventListener("click", () => {
        this.modeToggle.nativeElement.classList.toggle("active");
        if (body) {
          body.classList.toggle("dark");

          if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
          } else {
            localStorage.setItem("mode", "dark-mode");
          }
        }
      });
    }

    if (this.searchToggle) {
      this.searchToggle.nativeElement.addEventListener("click", () => {
        this.searchToggle.nativeElement.classList.toggle("active");
      });
    }

    if (this.sidebarOpen && this.nav) {
      this.sidebarOpen.nativeElement.addEventListener("click", () => {
        this.nav.nativeElement.classList.add("active");
      });
    }

    if (body && this.nav) {
      body.addEventListener("click", (e) => {
        let clickedElm = e.target as HTMLElement;
        if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
          this.nav.nativeElement.classList.remove("active");
        }
      });
    }
  }
}