import { NgModule } from '@angular/core';
import { StudiosInfoPage } from './studios-info.page';
import { StudiosInfoPageRoutingModule } from './studios-info-routing.module';
import {SharedModule} from '../common/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StudiosInfoPageRoutingModule,
  ],
  declarations: [StudiosInfoPage]
})
export class StudiosInfoPageModule {}
