import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs-form',
  templateUrl: './chefs-form.component.html',
  styleUrls: ['./chefs-form.component.scss']
})
export class ChefsFormComponent implements OnInit {
  keys: any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
