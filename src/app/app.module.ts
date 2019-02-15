import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalService } from '../app/services/modal.service';
import { ModalComponent } from './_directives';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
    PoliticasComponent,
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    RolesComponent,
    JuegosComponent,
    ModalComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
