import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainPageComponent} from "../main-page.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    IonicModule
  ]
})
export class MainModule { }
