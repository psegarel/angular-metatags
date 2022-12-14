import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canLoad:[],
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    canLoad:[],
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'gallery',
    canLoad:[],
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'about',
    canLoad:[],
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
