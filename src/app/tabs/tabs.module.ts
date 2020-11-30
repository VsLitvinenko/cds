import { NgModule } from '@angular/core';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import {SharedModule} from '../common/shared.module';

@NgModule({
  imports: [
      SharedModule,
      TabsPageRoutingModule
  ],
  providers: [],
  declarations: [TabsPage]
})
export class TabsPageModule {}
