import { NgModule } from '@angular/core';
import { CdsInfoPage } from './cds-info.page';
import { CdsInfoPageRoutingModule } from './cds-info-routing.module';
import {SharedModule} from '../common/shared.module';



@NgModule({
  imports: [
    SharedModule,
    CdsInfoPageRoutingModule
  ],
  declarations: [CdsInfoPage]
})
export class CdsInfoPageModule {}
