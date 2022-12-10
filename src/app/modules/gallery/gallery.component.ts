import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  updateTags$:Observable<any> = this.metatagsService.update('gallery');

  constructor(
    private metatagsService:MetatagsService){
  }

}
