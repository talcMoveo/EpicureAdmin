import { Component, Input, OnInit, OnChanges, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chef } from 'src/app/models/chef.model';

@Component({
  selector: 'app-chefs-form',
  templateUrl: './chefs-form.component.html',
  styleUrls: ['../../shared/form-styling.component.scss']
})
export class ChefsFormComponent implements OnInit, OnChanges {
  @Input() newChef!: boolean;
  @Input() chef!: Chef | undefined;
  @Input() clickEvent!: any;
  @Output() hideForm = new EventEmitter<{ event: Chef | undefined, isNew: boolean, oldData: Chef | undefined }>();

  chefDetails: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    active: new FormControl(''),
  });

  constructor(private _eref: ElementRef) {
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
    console.log('1', this.clickEvent);
    console.log('2', this._eref.nativeElement);
  }

  onSubmit = () => {
    this.hideForm.emit({ event: this.chefDetails.value, isNew: this.chef ? false : true, oldData: this.chef });
  }

  closeForm = () => {
    this.hideForm.emit({ event: undefined, isNew: true, oldData: undefined });
  }
}
