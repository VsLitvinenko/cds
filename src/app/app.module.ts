import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ApiService} from './common/services/api.service';
import {PopoverService} from './common/services/popover.service';
import {PreferColorSchemeService} from './common/services/prefer-color-scheme.service';
import {SharedModule} from './common/shared.module';

@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    ApiService,
    PopoverService,
    PreferColorSchemeService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
