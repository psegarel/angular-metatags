import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService, TagContent } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  // updateTags:Observable<any> = this.metatagsService.update('about').pipe(
  //   tap( content => this.pageContent = content)
  // );

  pageContent:any = {
    title:'About',
    description:'About hard-coded description',
    imgUrl:'https://cdn.lorem.space/images/furniture/.cache/1920x1080/martin-pechy-bpg-ngqrPc8-unsplash.jpg'
  };  
  
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
      if(this.pageContent){
        this.metatagsService.updateTags(this.pageContent);
      }
  }
}
