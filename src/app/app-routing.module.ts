import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabiesComponent } from './babies/babies.component';
import { BabyComponent } from './baby/baby.component';
import { BabyCareComponent } from './baby-care/baby-care.component';

const routes: Routes = [
  {
    path: 'babies',
    children: [{
      path: '',
      component: BabiesComponent
    }, {
      path: ':id',
      component: BabyComponent,
      children: [{
        path: 'care',
        component: BabyCareComponent
      }]
    }]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'babies'
  },
  {
    path: '**',
    redirectTo: 'babies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
