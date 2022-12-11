import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { MetatagsService } from './services/metatags.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadPageGuard implements CanLoad {
  constructor(
    private dataService: DataService,
    private metatagsService:MetatagsService) {

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let path: string | undefined = route.path;

    if (typeof path != 'undefined') {
      let routeData: Observable<any> =
        route.path == ''
          ? this.dataService.getData('home')
          : this.dataService.getData(path);
      
      return routeData.pipe(
        map( val => {
          if(val && val.title){
            this.metatagsService.updateTags(val);
            return true;
          }
          return false;
        }))
    }
    return false;
  }
}
