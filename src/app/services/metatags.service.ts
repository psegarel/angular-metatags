import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class MetatagsService {
  private sitename: string = 'Angular Metatags';
  private url: string = 'https://angular-metatags.vn';
  private keywords: string[] = ['Angular', 'SEO', 'Metatags'];

  private imgUrl: string =
    'https://cdn.lorem.space/images/furniture/.cache/1920x1080/minh-pham-OtXADkUh3-I-unsplash.jpg';
  private baseline: string = 'Angular Metatags global description';

  private base: any[] = [
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: this.keywords },
    { name: 'description', content: this.baseline },
    { charset: 'UTF-8' },
  ];
  private twitterHandle: string = '@p_segarel';

  private twitter: any[] = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: this.twitterHandle },
    { name: 'twitter:title', content: this.sitename },
    { name: 'twitter:url', content: this.url },
    { name: 'twitter:description', content: this.baseline },
    { name: 'twitter:image', content: this.imgUrl },
  ];

  private openGraph: any[] = [
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: this.url },
    { property: 'og:title', content: this.sitename },
    { property: 'og:image', content: this.imgUrl },
    { property: 'og:description', content: this.baseline },
  ];
  constructor(
    private meta: Meta,
    private title: Title,
    private dataService: DataService
  ) {}

  update(pageName: string) {
    return this.dataService.getData(pageName).pipe(
      tap((value) => {
        if (value) {
          let tags: TagContent = {
            title: value.title,
            description: value.description,
            imgUrl: value.imgUrl,
          };
          this.updateTags(tags);
        }
      })
    );
  }

  updateTags(content: TagContent) {

    this.title.setTitle(content.title);

    this.meta.updateTag({ name: 'description', content: content.description });

    this.meta.updateTag({ name: 'twitter:title', content: content.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: content.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: content.imgUrl });

    this.meta.updateTag({ property: 'og:title', content: content.title });
    this.meta.updateTag({
      property: 'og:description',
      content: content.description,
    });
    this.meta.updateTag({ property: 'og:image', content: content.imgUrl });
  }

  init() {
    this.title.setTitle(this.sitename);
    this.meta.addTags(this.base);
    this.meta.addTags(this.twitter);
    this.meta.addTags(this.openGraph);
  }
}

export interface TagContent {
  title: string;
  description: string;
  imgUrl: string;
}
