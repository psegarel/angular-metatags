import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  routes:any[] = [
    {
      name:'Home',
      url:''
    },
    {
      name:'Projects',
      url:'projects'
    },
    {
      name:'Gallery',
      url:'gallery'
    },
    {
      name:'About',
      url:'about'
    }

  ]
}
