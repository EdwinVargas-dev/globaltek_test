import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Invoice list', type: 'link', icon: 'receipt' },
  { state: 'invoice-create', type: 'link', name: 'Create invoice', icon: 'receipt_large' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
