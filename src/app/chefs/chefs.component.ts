import { Component, OnInit, OnChanges } from '@angular/core';
import { Chef } from '../models/chef.model';
import { GetDataService } from '../shared/get-data.service';


@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  chefs!: any;
  images: any = {
    "Yossi Shitrit": "https://i.ibb.co/Ytv0Q83/yossi-shitrit.png",
  };
  keys: string[] = ['name', 'description', 'active'];
  currentChef!: Chef | undefined;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getChefs().subscribe((res) => {
      this.chefs = res;
    });
  }

  handleAddChef = () => {
    this.currentChef = undefined;
    this.showForm = !this.showForm;
  }

  openForm = (event: any) => {
    this.currentChef = event;
    this.showForm = !this.showForm;
  }

  closeForm = () => {
    this.showForm = false;
  }
}
