import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefsComponent } from './chefs/chefs.component';

const routes: Routes = [
  { path: '', redirectTo: 'chefs', pathMatch: 'full' },
  { path: 'chefs', component: ChefsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
