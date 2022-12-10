import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  updateTags$:Observable<any> = this.metatagsService.update('home');
  
  constructor(
    private metatagsService:MetatagsService){
  }
}
