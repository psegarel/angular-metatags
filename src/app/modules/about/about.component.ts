import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  data$:Observable<any> = this.dataService.getData('about').pipe(
    
    tap( value => {
      if(value){
        let tags:TagContent = {
          title:value.title,
          description:value.description,
          imgUrl:value.imgUrl
        }
  
        this.metatagsService.updateTags(tags);
      }

    }) );
  
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }
}
