import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudiosInfoPage } from './studios-info.page';
import { StudiosInfoPageRoutingModule } from './studios-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StudiosInfoPageRoutingModule
  ],
  declarations: [StudiosInfoPage]
})
export class StudiosInfoPageModule {}
