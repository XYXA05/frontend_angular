import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-write-massage',
  templateUrl: './write-massage.component.html',
  styleUrl: './write-massage.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class WriteMassageComponent {
  public showFilterTable: boolean = true;





  toggleFilterTable(): void {
    this.showFilterTable = !this.showFilterTable;
  }
}
