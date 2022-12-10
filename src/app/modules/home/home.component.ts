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

  updateTags:Observable<any> = this.metatagsService.update('home').pipe(
    tap( content => this.pageContent = content)
  );
  pageContent:any;  
  
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }
}
