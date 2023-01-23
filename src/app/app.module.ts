import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponentComponent} from "./component/login/login-component/login-component.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MainPageComponent} from "./pages/main-page/main-page.component";

@NgModule({
    declarations: [AppComponent, LoginComponentComponent,],
    imports: [BrowserModule,
      IonicModule.forRoot({
        platform: {
          /** The default `desktop` function returns false for devices with a touchscreen.
           * This is not always wanted, so this function tests the User Agent instead.
           **/
          'desktop': (win) => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
            return !isMobile;
          }
        },
      }),
      AppRoutingModule, ReactiveFormsModule],
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    bootstrap: [AppComponent],
    exports: [
        LoginComponentComponent,

    ]
})
export class AppModule {}
