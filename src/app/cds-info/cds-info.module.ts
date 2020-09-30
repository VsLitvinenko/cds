import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdsInfoPage } from './cds-info.page';
import { CdsInfoPageRoutingModule } from './cds-info-routing.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CdsInfoPageRoutingModule
  ],
  declarations: [CdsInfoPage]
})
export class CdsInfoPageModule {}
