import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() peliculas:any[] = [];
  @Output() peliculaSeleccionada = new EventEmitter<any>();
  

  obtenerPelicula(id:number):any
  {
    return this.peliculaSeleccionada.emit(this.peliculas.find( (pelicula) => pelicula.id === id));
  }


}
