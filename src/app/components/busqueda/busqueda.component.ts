import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent 
{
  @Output() peliculasEnviadas = new EventEmitter<any>();
  peliculaSeleccionada = '';

  listadoPeliculas = [
      {
        id:1,
        nombre:"Evil Dead Rise",
        tipo:"Terror",
        fechaEstreno:"14/9/2023",
        cantidadPublico:"1000",
        fotoPelicula:"./evildedrise.jpg"
      },

      {
        id:2,
        nombre:"El diario de Noa",
        tipo:"Amor",
        fechaEstreno:"14/2/2024",
        cantidadPublico:"500",
        fotoPelicula:"./eldiariodenoa.jpg"
      },

      {
        id:3,
        nombre:"LittleMan",
        tipo:"Comedia",
        fechaEstreno:"2/9/2025",
        cantidadPublico:"3000",
        fotoPelicula:"./littleman.jpg"
      }
    ];

    enviarPeliculas() {
      this.peliculasEnviadas.emit(this.listadoPeliculas);
    }

    obtenerPeliculaSeleccionada(pelicula:any)
    {
      this.peliculaSeleccionada = pelicula;
    }
}
