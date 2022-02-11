import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../data.interface';

@Component({
  selector: 'nx-rorwform',
  templateUrl: './rorwform.component.html',
  styleUrls: ['./rorwform.component.scss']
})
export class RorwformComponent implements OnInit {
  data: DataInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      { name: 'Filip', count: 1 },
      { name: 'Martin', count: 4 },
      { name: 'Bill', count: 5 },
    ];
  }
}
