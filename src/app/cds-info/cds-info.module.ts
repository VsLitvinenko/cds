import { NgModule } from '@angular/core';
import { CdsInfoPage } from './cds-info.page';
import {SharedModule} from '../common/shared.module';



@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [CdsInfoPage]
})
export class CdsInfoPageModule {}
