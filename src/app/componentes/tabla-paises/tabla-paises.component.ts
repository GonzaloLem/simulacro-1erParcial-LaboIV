import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit
{
  listadoPaises:any[];
  paisSeleccionado:any;
  @Output() outPutPais = new EventEmitter<string>();

  constructor(private servicioPaises:PaisesService) 
  {
    this.listadoPaises = [];
    this.paisSeleccionado = {pais:null,itemSeleccionado:null};
  }

  ngOnInit()
  {
    this.servicioPaises.obtenerPaises("fields=name,flags").subscribe( (paises:any) => {
      this.listadoPaises = paises;
    });
  }

  activarItem(pais:string, index: number) 
  {
    this.paisSeleccionado.pais = pais;
    this.paisSeleccionado.itemSeleccionado = index;

    this.obtenerPais();
  }

  obtenerPais()
  {
    this.outPutPais.emit(this.paisSeleccionado.pais);
  }

}
