import { NgModule } from '@angular/core';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import {TabService} from './entities/services/tab.service';
import {SharedModule} from '../common/shared.module';

@NgModule({
  imports: [
      SharedModule,
      TabsPageRoutingModule
  ],
  providers: [
      TabService,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
