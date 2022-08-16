import { Component, OnInit, OnChanges } from '@angular/core';
import { Chef } from '../models/chef.model';
import { GetDataService } from '../shared/get-data.service';


@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['../shared/form-styling.component.scss']
})
export class ChefsComponent implements OnInit {
  chefs!: any;
  keys: string[] = ['image', 'name', 'description', 'active'];
  currentChef!: Chef | undefined;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getChefs().subscribe((res) => {
      this.chefs = res;
    });
  }

  handleAddChef = () => {
    console.log('opening form');
    this.currentChef = undefined;
    this.showForm = !this.showForm;
  }

  openForm = (event: any) => {
    console.log('opening form');
    this.currentChef = event;
    this.showForm = !this.showForm;
  }

  closeForm = () => {
    this.showForm = false;
    this.refreshData();
  }

  refreshData = () => {
    this.getDataService.getChefs().subscribe((res) => {
      this.chefs = res;
    })
  }
}
