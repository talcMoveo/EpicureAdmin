import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Chef } from '../models/chef.model';
import { Dish } from '../models/dish.model';
import { Restaurant } from '../models/restaurant.model';
import { ManageDataService } from '../shared/manage-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() type: string = '';
  @Input() displayedColumns: string[] = [];

  @Output() showForm = new EventEmitter<Dish | Restaurant | Chef>();

  constructor(private manageDataService: ManageDataService) {
  }

  ngOnInit(): void {
    this.displayedColumns.push('actions');
  }

  ngOnChanges(): void {
  }

  editItem = (item: Dish | Restaurant | Chef) => {
    this.showForm.emit(item);
  }

  deleteItem = (id: string) => {
    this.manageDataService.deleteItem(id, this.type);
  }

}
