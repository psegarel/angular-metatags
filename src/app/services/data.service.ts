import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isBrowser!:boolean;

  private configUrl = 'assets/data.json';
  constructor(
    @Inject(PLATFORM_ID) platformId:Object,
    private http: HttpClient) {
      this.isBrowser = isPlatformBrowser(platformId)
  }

  getData(name:string){
    if(this.isBrowser){
      return this.http.get(this.configUrl).pipe(
        map( (value:any) => value[name]))
    }else {
      return of(null)
    }
  }
}
