import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setupMenu(): void {
    this.menuItems = [
      {
        label: 'Component',
        items: [
          {
            label: 'Component communication'
          }
        ]
      }
    ];
  }

}
