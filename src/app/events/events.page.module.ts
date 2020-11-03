import { NgModule } from '@angular/core';
import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import {EventTableComponent} from './entities/components/event-table/event-table.component';
import {AddEventComponent} from './entities/components/add-event/add-event.component';
import {CurrentDateEventComponent} from './entities/components/current-date-event/current-date-event.component';
import {SharedModule} from '../common/shared.module';
import {NgCalendarModule} from 'ionic2-calendar';
import {ReactiveFormsModule} from '@angular/forms';
import {EventsService} from './entities/services/events.service';

@NgModule({
  imports: [
      SharedModule,
      EventsPageRoutingModule,
      NgCalendarModule,
      ReactiveFormsModule,
  ],
  declarations: [
      EventsPage,
      EventTableComponent,
      AddEventComponent,
      CurrentDateEventComponent,
  ],
    providers: [
        EventsService,
    ],
})
export class EventsPageModule {}
