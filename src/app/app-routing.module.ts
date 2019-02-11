import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { JuegosComponent } from './components/juegos/juegos.component';


export const routes: Routes = [
  {path: 'juegos', component: JuegosComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'politicas', component: PoliticasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
