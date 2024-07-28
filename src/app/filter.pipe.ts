import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], type: string | null, feature: string | null, selectedTerm: string | null, selectedHouse: string | null): any {
    if (!items) {
      return items;
    }

    let filteredItems = items;

    if (type) {
      filteredItems = filteredItems.filter(item => item.type_items === type);
    }

    if (feature) {
      filteredItems = filteredItems.filter(item => item.Features === feature);
    }

    if (selectedTerm) {
      filteredItems = filteredItems.filter(item => item.input_term === selectedTerm);
    }

    if (selectedHouse) {
      filteredItems = filteredItems.filter(item => item.namber_build_andsection === selectedHouse);
    }

    return filteredItems;
  }
}