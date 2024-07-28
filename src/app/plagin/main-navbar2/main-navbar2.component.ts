
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { coolTransition } from '../../route-animations';


@Component({
  selector: 'app-main-navbar2',
  templateUrl: './main-navbar2.component.html',
  styleUrl: './main-navbar2.component.css',
  encapsulation: ViewEncapsulation.Emulated, // Default
  animations: [coolTransition]

})
export class MainNavbar2Component implements OnInit{
  id: string | null = null;
  @Input() jsonData: any ; // Initialize jsonData to an empty object

  constructor(private route: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }
}