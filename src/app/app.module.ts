import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChefsComponent } from './chefs/chefs.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChefsFormComponent } from './chefs/chefs-form/chefs-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishesComponent } from './dishes/dishes.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DishesFormComponent } from './dishes/dishes-form/dishes-form.component';
import { RestaurantsFormComponent } from './restaurants/restaurants-form/restaurants-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
 
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChefsComponent,
    ChefsFormComponent,
    DishesComponent,
    RestaurantsComponent,
    DishesFormComponent,
    RestaurantsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
