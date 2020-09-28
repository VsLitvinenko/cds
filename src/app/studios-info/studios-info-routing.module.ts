import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiosInfoPage } from './studios-info.page';

const routes: Routes = [
  {
    path: '',
    component: StudiosInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosInfoPageRoutingModule {}
