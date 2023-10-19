import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
>>>>>>> 08581867c4d5f5f46f50328c704fa1d7c745df4d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    TablaPeliculaComponent,
    DetallePeliculaComponent,
>>>>>>> 08581867c4d5f5f46f50328c704fa1d7c745df4d
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
<<<<<<< HEAD
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    HeaderComponent,
    TablaPaisesComponent,
    BienvenidoComponent,
    TablaActorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
=======
    PeliculaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 08581867c4d5f5f46f50328c704fa1d7c745df4d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
