import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudiosEntryFormPage } from './studios-entry-form.page';

import { StudiosEntryFormPageRoutingModule } from './studios-entry-form-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StudiosEntryFormPageRoutingModule,
  ],
  declarations: [StudiosEntryFormPage]
})
export class StudiosEntryFormPageModule {}
