import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';
import { Validaciones } from 'src/app/clases/validaciones';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent 
{
  formulario: FormGroup;
  actoresSeleccionados:any[];
  private imagen:any;

  constructor(private formBuilder:FormBuilder, private servicioPelicula:PeliculasService)
  {
    this.actoresSeleccionados = [];

    this.formulario = this.formBuilder.group
    ({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      tipo: ['', [Validators.required, Validators.minLength(3), Validaciones.soloLetras]],
      fechaEstreno: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9/ ]*$/)]],
      cantidadPublico: ['', [Validators.required, Validaciones.soloNumeros]],
      foto: ['', [Validators.required]]
    });
  }

  obtenerPaisSeleccionado(actores:any[])
  {
    this.actoresSeleccionados = actores;
  }

  seleccionArchivo(event: any) 
  {
    this.imagen =  event.target?.files[0];
    this.formulario.get('foto')?.setValue("./" + event.target?.files[0].name.toString());
  }

  darAlta()
  {
    if(this.formulario.valid && this.actoresSeleccionados !== null)
    {
      this.servicioPelicula.insertar( 
        new Pelicula
        (
          this.formulario.get("nombre")?.value,
          this.formulario.get("tipo")?.value,
          this.formulario.get("fechaEstreno")?.value,
          parseInt(this.formulario.get("cantidadPublico")?.value),
          this.imagen,
          this.actoresSeleccionados
      ));
    }

  }
}
