import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdsInfoPage } from './cds-info.page';

const routes: Routes = [
  {
    path: '',
    component: CdsInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
