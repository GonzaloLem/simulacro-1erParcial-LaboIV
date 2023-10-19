import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit
{
  @Output() outPutPelicula = new EventEmitter<any>();
  listadoPeliculas:any[];
  private imagenes:any;

  constructor(private servicioPeliculas:PeliculasService)
  {
    this.listadoPeliculas = [];
    this.imagenes = [];
  }
  async ngOnInit():Promise<void>
  {

    this.imagenes = await this.servicioPeliculas.obtenerImagenesPeliculas();

     this.servicioPeliculas.obtenerPeliculas().subscribe( async (pelicula:any) => {
      this.listadoPeliculas = pelicula;

      for(let item of this.imagenes)
      {
        for(let i=0; i<this.listadoPeliculas.length;i++)
        {
            if(item.nombre === this.listadoPeliculas[i].foto)
            {
              this.listadoPeliculas[i].urlFoto = item.url;
            }
        }
      }
      console.log(this.listadoPeliculas);
    });

    
  }


  obtenerPelicula(pelicula:any)
  {
    this.outPutPelicula.emit(pelicula);
  }
}
