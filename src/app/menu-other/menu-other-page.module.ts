import { IonicModule } from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuOtherPage } from './menu-other.page';
import { MenuOtherPageRoutingModule } from './menu-other-routing.module';
import {NavigationPageComponent} from './entities/components/navigation-page/navigation-page.component';
import {MapComponent} from './entities/components/map/map.component';
import {ContactsComponent} from './entities/components/contacts/contacts.component';
import {EventTableComponent} from './entities/components/event-table/event-table.component';
import {RespectComponent} from './entities/components/respect/respect.component';
import {NgCalendarModule} from 'ionic2-calendar';
import {AddEventComponent} from './entities/components/event-table/entities/components/add-event/add-event.component';
import {CurrentDateEventComponent} from './entities/components/event-table/entities/components/current-date-event/current-date-event.component';
import {EventTableService} from './entities/components/event-table/entities/services/event-table.service';
import {SettingsComponent} from './entities/components/settings/settings.component';
import {ApiService} from '../common/api/api.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MenuOtherPageRoutingModule,
        NgCalendarModule,
        ReactiveFormsModule
    ],
  declarations: [
      MenuOtherPage,
      NavigationPageComponent,
      MapComponent,
      ContactsComponent,
      EventTableComponent,
      RespectComponent,
      AddEventComponent,
      CurrentDateEventComponent,
      SettingsComponent,
  ],
    providers: [
        EventTableService,
        ApiService,
    ],
})
export class MenuOtherPageModule {}
