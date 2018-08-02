import { Component, OnInit } from '@angular/core';
import { items, types } from '../../environments/environment';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  items;
  constructor() { }

  ngOnInit() {
    this.items = items;
  }

  getTypeName(type) {
    return types[type];
  }

}
