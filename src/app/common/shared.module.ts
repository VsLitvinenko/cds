import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedService} from './services/shared.service';

@NgModule({
    imports: [
        // IonicModule,
        // CommonModule,
        // FormsModule,
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    providers: [
        SharedService
    ],
    declarations: []
})
export class SharedModule {}
