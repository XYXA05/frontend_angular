import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../../route-animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  animations: [fadeAnimation]
})
export class ContactsComponent implements OnInit{
  public jsonDataOwner: any;

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.getMethodOwner(); // Call getMethodOwner here

  }
  public getMethodOwner(){
    this.http.get(`http://127.0.0.1:8000/user/1/`).subscribe((data:any) =>{
      console.log(data);
      this.jsonDataOwner = data;
    }
    );
  }
}
