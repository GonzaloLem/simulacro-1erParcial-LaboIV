import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent 
{
  @Output() outPutCerrarDetalle:any = new EventEmitter<void>();
  @Input() pelicula:any;

  constructor()
  {
    this.pelicula = null;
  }

  eliminarModal()
  {
    this.outPutCerrarDetalle.emit();
  }

}
