import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
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
