import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent 
{
  @Output() outPutdetalle = new EventEmitter<any>();
  @Input() pelicula:any;

  constructor()
  {
    this.pelicula = null;
  }

  obtenerDetallePelicula()
  {
    this.outPutdetalle.emit(this.pelicula);
  }
}
