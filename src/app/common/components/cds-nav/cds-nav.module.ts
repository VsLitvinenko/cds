import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {CdsNavComponent} from './cds-nav.component';
import { SharedModule } from '../../shared.module';
import {CdsNavRoutingModule} from './cds-nav-routing.module';
import {CdsInfoPageModule} from '../../../cds-info/cds-info.module';
import {EventsPageModule} from '../../../events/events.page.module';
import {StudiosInfoPageModule} from '../../../studios-info/studios-info.module';
import {MenuOtherPageModule} from '../../../menu-other/menu-other-page.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    ReactiveFormsModule,
    CdsNavRoutingModule,
    CdsInfoPageModule,
    EventsPageModule,
    StudiosInfoPageModule,
    MenuOtherPageModule,
  ],
  declarations: [
    CdsNavComponent,
  ],
})
export class CdsNavModule {}
