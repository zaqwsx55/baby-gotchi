import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabiesComponent } from './babies/babies.component';
import { BabyComponent } from './baby/baby.component';

const routes: Routes = [
  {
    path: 'babies',
    children: [{
      path: '',
      component: BabiesComponent
    }, {
      path: ':id',
      component: BabyComponent,
      pathMatch: 'prefix'
    }]
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
