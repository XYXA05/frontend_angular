import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-document-puti',
  templateUrl: './document-puti.component.html',
  styleUrl: './document-puti.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class DocumentPutiComponent {
  constructor(private translate: TranslateService) {    
    this.translate.setDefaultLang('en');
    // Optionally, use browser language as default
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
@Input() jsonData:any;
}
