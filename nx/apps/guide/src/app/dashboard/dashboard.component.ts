import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'nx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ DashboardService ]
})
export class DashboardComponent implements OnInit {
  menuItems: MegaMenuItem[] = [];

  constructor(private readonly service: DashboardService) { }

  ngOnInit(): void {
    this.menuItems = this.service.menuItems;
  }

}
