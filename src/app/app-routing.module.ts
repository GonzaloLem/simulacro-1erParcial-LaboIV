import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = 
[
  {path:"bienvenido", component: BienvenidoComponent, canActivate: [loginGuard]},
  {path:"busqueda", component: BusquedaComponent},
  {path:"peliculas/alta", component: PeliculaAltaComponent},
  {path:"peliculas/listado", component: PeliculaListadoComponent},
  {path:"actor/alta", component: ActorAltaComponent},
  {path:"actor/listado", component: ActorListadoComponent},

  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path: '', redirectTo: 'bienvenido', pathMatch: 'full' }
  //{path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
