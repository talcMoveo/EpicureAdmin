import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { TableComponent } from './table/table.component';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PopupWindowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
