import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Angular pipes',
          icon: 'pi pi-fw pi-desktop',
          items: [
            {
              label: 'Text and Dates', 
              icon: 'pi pi-fw pi-align-left', 
              routerLink: '/'
            },
            {
              label: 'Numbers', 
              icon: 'pi pi-dollar', 
              routerLink: '/numbers'
            },
            {
              label: 'No commons', 
              icon: 'pi pi-globe', 
              routerLink: '/no-commons'
            },
          ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-fw pi-check',
        routerLink: '/customs'
      }
  ];
  }

}
