import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from "./guarda/authGuard";
 import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';

//rotas da aplicação
const appRoutes: Routes = [
  { path: '', loadChildren: './paginas/paginas.module#PaginasModule' }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
