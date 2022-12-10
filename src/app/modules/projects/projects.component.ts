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

  updateTags:Observable<any> = this.metatagsService.update('projects').pipe(
    tap( content => this.pageContent = content)
  );
  pageContent:any;  
  
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }

}
