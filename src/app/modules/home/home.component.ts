import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pageRef:string = 'home'
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
