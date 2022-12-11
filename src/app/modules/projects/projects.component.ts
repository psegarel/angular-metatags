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

  pageRef:string = 'projects'
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
