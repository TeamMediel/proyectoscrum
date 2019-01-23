import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PoliticasComponent } from './components/politicas/politicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
