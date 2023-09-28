import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
