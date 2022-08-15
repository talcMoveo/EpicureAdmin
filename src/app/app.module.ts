import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { TableComponent } from './table/table.component';
import { ModalModule } from './_modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ChefsComponent } from './chefs/chefs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChefsFormComponent } from './chefs/chefs-form/chefs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PopupWindowComponent,
    ChefsComponent,
    ChefsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
