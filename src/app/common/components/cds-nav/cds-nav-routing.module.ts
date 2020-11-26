import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CdsNavComponent} from './cds-nav.component';

const routes: Routes = [
  {
    path: '',
    component: CdsNavComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdsNavRoutingModule {}
