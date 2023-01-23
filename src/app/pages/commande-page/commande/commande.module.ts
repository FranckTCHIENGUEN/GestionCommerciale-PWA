import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import {CommandePageComponent} from "../commande-page.component";


@NgModule({
  declarations: [CommandePageComponent],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
