import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiosEntryFormPage } from './studios-entry-form.page';

const routes: Routes = [
  {
    path: '',
    component: StudiosEntryFormPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosEntryFormPageRoutingModule {}
