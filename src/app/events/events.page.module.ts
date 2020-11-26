import { NgModule } from '@angular/core';
import { EventsPage } from './events.page';
import {AddEventComponent} from './entities/components/add-event/add-event.component';
import {CurrentDateEventComponent} from './entities/components/current-date-event/current-date-event.component';
import {NgCalendarModule} from 'ionic2-calendar';
import {EventsService} from './entities/services/events.service';
import {SharedModule} from '../common/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
      SharedModule,
      ReactiveFormsModule,
      NgCalendarModule,
  ],
  declarations: [
      EventsPage,
      AddEventComponent,
      CurrentDateEventComponent,
  ],
    providers: [
        EventsService,
    ],
})
export class EventsPageModule {}
