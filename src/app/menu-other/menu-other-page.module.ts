import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuOtherPage } from './menu-other.page';
import { MenuOtherPageRoutingModule } from './menu-other-routing.module';
import {NavigationPageComponent} from './entities/components/navigation-page/navigation-page.component';
import {MapComponent} from './entities/components/map/map.component';
import {ContactsComponent} from './entities/components/contacts/contacts.component';
import {RespectComponent} from './entities/components/respect/respect.component';
import {NgCalendarModule} from 'ionic2-calendar';
import {SettingsComponent} from './entities/components/settings/settings.component';
import {PhotoService} from './entities/components/respect/entities/services/photo.service';
import {SharedModule} from '../common/shared.module';
import {CurrentRespectComponent} from './entities/components/respect/entities/components/current-respect/current-respect.component';
import {ShowImageComponent} from './entities/components/respect/entities/components/show-image/show-image.component';

@NgModule({
    imports: [
        SharedModule,
        MenuOtherPageRoutingModule,
        NgCalendarModule,
        ReactiveFormsModule,
    ],
  declarations: [
      MenuOtherPage,
      NavigationPageComponent,
      MapComponent,
      ContactsComponent,
      RespectComponent,
      SettingsComponent,
      CurrentRespectComponent,
      ShowImageComponent,
  ],
    providers: [
        PhotoService,
    ],
})
export class MenuOtherPageModule {}
