import { Pipe, PipeTransform } from '@angular/core';
import { salledesport } from 'src/app/model/salledesport.model';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: salledesport[], filterText: string): any { return list ? list.filter(item => item.nomsalledesport.toLowerCase().includes(filterText)) : []; }
  }


