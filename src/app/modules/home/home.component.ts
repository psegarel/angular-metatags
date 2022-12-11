import { Component } from '@angular/core';
import { table } from 'console';
import { map, Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  updateTags$:Observable<any> = this.dataService.store$.pipe(
   map( val => {
    if(val && val['home']){
      return val['home'] 
    }
   }),
   tap( content => {
    if(content){
      this.metatagsService.updateTags(content)
    }
   })
  )
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }
}
