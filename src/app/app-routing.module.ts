import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './components/pages/detalhes/detalhes.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { NovaNoticiaComponent } from './components/pages/nova-noticia/nova-noticia.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nova', component: NovaNoticiaComponent },
  { path: 'detalhes', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
