import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FolderPage} from "../../../folder/folder.page";
import {CommandePageComponent} from "../commande-page.component";

const routes: Routes = [
  {
    path: '',
    component: CommandePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
