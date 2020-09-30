import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuOtherPage } from './menu-other.page';
import { MenuOtherPageRoutingModule } from './menu-other-routing.module';
import {NavigationPageComponent} from './entities/components/navigation-page/navigation-page.component';
import {MapComponent} from './entities/components/map/map.component';

@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      MenuOtherPageRoutingModule,
  ],
  declarations: [
      MenuOtherPage,
      NavigationPageComponent,
      MapComponent,
  ]
})
export class MenuOtherPageModule {}
