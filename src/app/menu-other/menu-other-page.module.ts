import { IonicModule } from '@ionic/angular';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
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
      AddEventComponent
  ],
})
export class MenuOtherPageModule {}
