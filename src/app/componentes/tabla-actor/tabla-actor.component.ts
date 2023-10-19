import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit
{
  listadoActores:any[];
  @Output() outPutActores = new EventEmitter<any[]>();

  constructor(private servicioActores:ActoresService) 
  {
    this.listadoActores = [];
  }

  ngOnInit()
  {
    this.servicioActores.obtenerActores().subscribe( (actores:any) => {
      this.listadoActores = actores.map((actor: any) => ({ ...actor, seleccionado: false }));;
    });
  }

  activarItem(index: number) 
  {
    this.listadoActores[index].seleccionado = !this.listadoActores[index].seleccionado;
    this.obtenerActor();
  }

  obtenerActor()
  {
    this.outPutActores.emit(
      this.listadoActores
      .filter(actor => actor.seleccionado)
      .map(actor => actor.nombre)
    );
  }
}
