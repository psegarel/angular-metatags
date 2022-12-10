import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  data$:Observable<any> = this.dataService.getData('projects').pipe(
    
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
