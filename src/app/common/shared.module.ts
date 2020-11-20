import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedService} from './services/shared.service';
import {CdsNavComponent} from './components/cds-nav/cds-nav.component';

@NgModule({
    imports: [
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CdsNavComponent,
    ],
    providers: [
        SharedService
    ],
    declarations: [CdsNavComponent]
})
export class SharedModule {}
