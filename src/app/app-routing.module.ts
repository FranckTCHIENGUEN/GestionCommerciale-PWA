import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from "./component/login/login-component/login-component.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";

const routes: Routes = [
  { path: '',
    component: LoginComponentComponent,
  },
  // { path: 'acceuil',
  //   component: MainPageComponent,
  //   children:[
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./pages/dashboard/dashboard-page/dashboard/dashboard.module').
  //       then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'commande',
  //       loadChildren: () => import('./pages/commande-page/commande/commande.module').
  //       then(m => m.CommandeModule)
  //     },
  //   ]
  // },
  {
    path: 'acceuil',
    loadChildren: () => import('./pages/main-page/main/main.module')
      .then(mod => mod.MainModule)
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
