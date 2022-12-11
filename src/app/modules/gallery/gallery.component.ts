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

  pageRef:string = 'gallery'
  data$:Observable<any> = this.dataService.getData(this.pageRef).pipe(
    tap( (content:TagContent|null) => {
      if(content && content.title){
        this.metatagsService.updateTags(content);
      }
    })
  );
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }

}
