import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOtherPage } from './menu-other.page';

const routes: Routes = [
  {
    path: '',
    component: MenuOtherPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuOtherPageRoutingModule {}
