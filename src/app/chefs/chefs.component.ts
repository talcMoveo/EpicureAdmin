import { Component, ElementRef, OnInit } from '@angular/core';
import { Chef } from '../models/chef.model';
import { GetDataService } from '../shared/get-data.service';
import { ManageDataService } from '../shared/manage-data.service';


@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['../shared/form-styling.component.scss'],
  host: {
    '(document:click)': 'onClickSomewhere($event)',
  }
})
export class ChefsComponent implements OnInit {
  chefs!: any;
  keys: string[] = ['image', 'name', 'description', 'active'];
  currentChef!: Chef | undefined;
  clickEvent: any;

  showForm: boolean = false;

  constructor(private getDataService: GetDataService, private manageData: ManageDataService, private _eref: ElementRef) { }

  ngOnInit(): void {
    this.getDataService.getChefs().subscribe((res) => {
      console.log('res: ', res);
      this.chefs = res;
    });
  }

  onClickSomewhere(event: any) {
    this.clickEvent = event.target;
    // if (!this._eref.nativeElement.contains(event.target)) {
    //   // this.closeForm();
    // }


    // const chefsForm = document.getElementById("chefsForm");
    // console.log('chefsForm', chefsForm);
    // event.path.forEach((element: any) => {
    //   console.log('element', element);
    //   if (element ) {

    //   }
    // });
  }

  handleAddChef = () => {
    this.currentChef = undefined;
    this.showForm = !this.showForm;
  }

  openForm = (event: any) => {
    console.log('here', event);
    this.currentChef = event;
    this.showForm = !this.showForm;
  }

  closeForm = ($event: { event: Chef | undefined, isNew: boolean, oldData: Chef | undefined }) => {
    console.log($event);

    if ($event.event) {
      if ($event.isNew) {
        this.manageData.addItem('chefs', $event.event);
      } else {
        console.log($event.event._id);
        if ($event.oldData) {
          this.manageData.editItem($event.oldData._id.toString(), 'chefs', $event.event);
        }
      }
    }
    this.showForm = false;
  }

  refreshData = () => {
    this.getDataService.getChefs().subscribe((res) => {
      this.chefs = res;
    })
  }
}
