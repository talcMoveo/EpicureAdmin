import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { TableComponent } from './table/table.component';
import { ModalModule } from './_modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ChefsFormComponent } from './chefs-form/chefs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PopupWindowComponent,
    ChefsFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
