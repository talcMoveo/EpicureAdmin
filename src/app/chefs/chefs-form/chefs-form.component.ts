import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/models/chef.model';
import { GetDataService } from 'src/app/shared/get-data.service';
import { ManageDataService } from 'src/app/shared/manage-data.service';

@Component({
  selector: 'app-chefs-form',
  templateUrl: './chefs-form.component.html',
  styleUrls: ['../../shared/form-styling.component.scss']
})
export class ChefsFormComponent implements OnInit, OnChanges {
  @Input() newChef!: boolean;
  @Input() chef!: Chef | undefined;
  @Output() hideForm = new EventEmitter<boolean>();

  chefDetails: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private manageData: ManageDataService, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.chefDetails.setValue({
      img: this.chef ? this.chef.img : '',
      name: this.chef ? this.chef.name : '',
      description: this.chef ? this.chef.description : '',
      active: this.chef ? this.chef.active : true
    });
  }

  ngOnChanges(): void {
  }

  onSubmit = () => {
    console.log(this.chefDetails.value);
    if (!this.chef) {
      this.manageData.addItem('chefs', this.chefDetails.value);
    } else {
      this.manageData.editItem(this.chef._id.toString(), 'chefs', this.chefDetails.value);
    }
    this.closeForm();
  }

  closeForm = () => {
    this.hideForm.emit(true);
  }
}
