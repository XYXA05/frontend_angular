import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private filterData = new BehaviorSubject<any>(null);
  currentFilterData = this.filterData.asObservable();

  constructor() {}

  updateFilterData(data: any) {
    this.filterData.next(data);
  }
}