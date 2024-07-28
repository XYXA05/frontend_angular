import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-document-puti',
  templateUrl: './document-puti.component.html',
  styleUrl: './document-puti.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class DocumentPutiComponent {
@Input() jsonData:any;
}
