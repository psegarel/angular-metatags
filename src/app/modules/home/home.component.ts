import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data$:Observable<any> = this.dataService.getData('home');
  constructor(
    private dataService:DataService,
    private metatagsService:MetatagsService){
  }
}
