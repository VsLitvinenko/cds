import { NgModule } from '@angular/core';
import { StudiosInfoPage } from './studios-info.page';
import {SharedModule} from '../common/shared.module';
import {EntryFormComponent} from './entities/components/entry-form/entry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StudiosInfoService} from './entities/services/studios-info.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StudiosInfoPage,
    EntryFormComponent,
  ],
  providers: [
      StudiosInfoService,
  ]
})
export class StudiosInfoPageModule {}
