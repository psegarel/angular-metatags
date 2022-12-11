import { Component } from '@angular/core';
import { MetatagsService } from './services/metatags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private metatagsService:MetatagsService){
    
    this.metatagsService.init();
  }
  title = 'angular-metatags';
}
