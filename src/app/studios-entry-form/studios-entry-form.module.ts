import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { StudiosEntryFormPage } from './studios-entry-form.page';

import { StudiosEntryFormPageRoutingModule } from './studios-entry-form-routing.module'
import {SharedModule} from '../common/shared.module';

@NgModule({
    imports: [
        SharedModule,
        StudiosEntryFormPageRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [StudiosEntryFormPage]
})
export class StudiosEntryFormPageModule {}
