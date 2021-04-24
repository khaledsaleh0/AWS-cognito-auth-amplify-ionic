import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddroomPage } from './addroom.page';

const routes: Routes = [
  {
    path: '',
    component: AddroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddroomPageRoutingModule {}
