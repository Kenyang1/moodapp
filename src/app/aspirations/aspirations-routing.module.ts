import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspirationsPage } from './aspirations.page';

const routes: Routes = [
  {
    path: '',
    component: AspirationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspirationsPageRoutingModule {}
