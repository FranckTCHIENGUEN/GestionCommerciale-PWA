import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from "../../dashboard/dashboard-page/dashboard-page.component";
import {MainPageComponent} from "../main-page.component";

const routes: Routes = [
  { path: '',
    component: MainPageComponent ,
    children:[
    {
      path: 'dashboard',
      loadChildren: () => import('../../dashboard/dashboard-page/dashboard/dashboard.module')
        .then(mod => mod.DashboardModule)
    },
    {
      path: 'commande',
      loadChildren: () => import('../../commande-page/commande/commande.module')
        .then(mod => mod.CommandeModule)
    },
  ]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
