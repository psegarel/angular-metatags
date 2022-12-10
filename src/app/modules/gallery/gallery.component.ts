import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  data$:Observable<any> = this.dataService.getData('gallery').pipe(
    
    tap( value => {
      if(value){
        let tags:TagContent = {
          title:value.title,
          description:value.description,
          imgUrl:value.imgUrl
        }
  
        this.metatagsService.updateTags(tags);
      }

    })
  );
  
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }

}
