import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map, Observable, of, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { TagContent } from './metatags.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private configUrl = 'assets/data.json';

  constructor(
    @Inject(PLATFORM_ID) private platformId:Object,
    private http: HttpClient) {
  }

  getAllData(){
    if(isPlatformBrowser(this.platformId)){
      return this.http.get(this.configUrl).pipe(
        //tap( val => console.log(val))
      )
    }else {
      console.log('Server call')
      return of(null)
    }
  }

  getData(name:string){
    if(isPlatformBrowser(this.platformId)){
      return this.http.get(this.configUrl).pipe(
        map( (value:any) => value[name]))
    }else {
      return of(null)
    }
  }
}
