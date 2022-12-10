import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  updateTags$:Observable<any> = this.metatagsService.update('projects').pipe(
  );
  pageContent:any;  
  
  constructor(
    private metatagsService:MetatagsService){
  }

}
