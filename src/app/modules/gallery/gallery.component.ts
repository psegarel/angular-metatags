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

  updateTags:Observable<any> = this.metatagsService.update('gallery').pipe(
    tap( content => this.pageContent = content)
  );
  pageContent:any;  

  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }

}
