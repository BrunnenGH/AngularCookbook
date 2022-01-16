import { Injectable } from '@angular/core';
import { MegaMenuItem, PrimeIcons } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  get menuItems(): MegaMenuItem[] {
    return [
      {
        label: 'Design',
        items: [
          [
          {
            label: 'Flex',
            items: [{ label: 'CSS Flex', routerLink: 'flex/cssflex', icon: PrimeIcons.PLUS}, { label: 'FxFlex', routerLink: 'flex/fxflex'}]
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
      },
      {
        label: 'Forms',
        items: [
          [
            {
              label: 'Template',
              items: [{ label: 'Read-only/Form', routerLink: 'template/rorwform'}]
            }
          ]
        ]
      }
    ];
  }

  constructor() { }
}
