import { Injectable } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  get menuItems(): MegaMenuItem[] {
    return [
      {
        label: 'Design',
        items: [
          [
          {
            label: 'Flex',
            items: [{ label: 'CSS Flex', routerLink: 'flex/cssflex'}, { label: 'FxFlex', routerLink: 'flex/fxflex'}]
          },
            {
              label: 'Grid',
              items: []
            }
          ],
          [
            {
              label: 'CSS',
              items: []
            }
          ]
          ]
      }
    ];
  }

  constructor() { }
}
