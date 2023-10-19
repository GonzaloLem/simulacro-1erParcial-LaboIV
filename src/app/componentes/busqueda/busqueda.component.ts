import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent 
{
  pelicula:any;
  ocultarListadoPeliculas:boolean;
  ocultarDetallePelicula:boolean;

  constructor()
  {
    this.pelicula = null;
    this.ocultarListadoPeliculas = true;
    this.ocultarDetallePelicula = false;
  }

  obtenerPelicula(pelicula:any)
  {
    this.pelicula = pelicula;
    this.ocultarDetallePelicula = !this.ocultarDetallePelicula;
    this.ocultarListadoPeliculas = !this.ocultarListadoPeliculas;
  }

  ocultarComponenteDetallePelicula()
  {
    this.ocultarDetallePelicula = !this.ocultarDetallePelicula;
    this.ocultarListadoPeliculas = !this.ocultarListadoPeliculas;
  }

}
