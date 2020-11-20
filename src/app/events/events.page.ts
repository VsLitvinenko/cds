import {Component} from '@angular/core';
import {EventTableComponent} from './entities/components/event-table/event-table.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {
  public eventTable = EventTableComponent;

  constructor() { }
}
