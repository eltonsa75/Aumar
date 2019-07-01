import { PorfolioComponent } from './porfolio/porfolio.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'portolio', component: PorfolioComponent},
  {path: 'contato', component: ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
