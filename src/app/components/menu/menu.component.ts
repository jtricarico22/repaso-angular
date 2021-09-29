import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas:any = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Posts',
      path: '/posts'
    },
    {
      name: 'Provincias',
      path: '/provincias'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
