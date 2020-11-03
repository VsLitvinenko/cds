import { NgModule } from '@angular/core';
import { StudiosInfoPage } from './studios-info.page';
import { StudiosInfoPageRoutingModule } from './studios-info-routing.module';
import {SharedModule} from '../common/shared.module';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StudiosListComponent} from './entities/components/studios-list/studios-list.component';

@NgModule({
  imports: [
    SharedModule,
    StudiosInfoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StudiosInfoPage,
    EntryFormComponent,
    StudiosListComponent
  ],
})
export class StudiosInfoPageModule {}
