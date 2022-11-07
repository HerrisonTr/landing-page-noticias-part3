import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './components/pages/detalhes/detalhes.component';
import { NovaNoticiaComponent } from './components/pages/nova-noticia/nova-noticia.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    NovaNoticiaComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
