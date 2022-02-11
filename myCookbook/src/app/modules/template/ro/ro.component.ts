import { Component, Input, OnInit } from '@angular/core';
import { DataInterface } from '../data.interface';

@Component({
  selector: 'nx-ro',
  templateUrl: './ro.component.html',
  styleUrls: ['./ro.component.scss']
})
export class RoComponent implements OnInit {

  @Input()
  item!: DataInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
