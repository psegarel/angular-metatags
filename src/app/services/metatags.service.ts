import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetatagsService {

  constructor(
    private meta:Meta,
    private title:Title
  ) { }
}

export interface TagContent {
  title:string,
  description:string,
  imgUrl:string
}
