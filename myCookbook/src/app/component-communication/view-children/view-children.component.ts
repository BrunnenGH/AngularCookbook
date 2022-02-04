import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent implements OnInit {
  title1 = "Nastaveno při deklaraci";
  title2: string | undefined;
  title3: string | undefined;

  constructor() {
    this.title2 = 'Nastaveno v konstruktoru';
  }

  ngOnInit(): void {
    this.title3 = 'Nastaveno v ngOnInit';
  }

}
