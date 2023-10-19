import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Validaciones } from 'src/app/clases/validaciones';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent 
{
  formulario: FormGroup;
  paisSeleccionado:string;

  constructor(private formBuilder:FormBuilder, private servicioActor:ActoresService)
  {
    this.paisSeleccionado = "";

    this.formulario = this.formBuilder.group
    ({
      nombre: ['', [Validators.required, Validators.minLength(3), Validaciones.soloLetras]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validaciones.soloLetras]],
      usuario: ['', [Validators.required, Validators.minLength(3), Validaciones.soloLetras]],
      numero: ['', [Validators.required, Validators.maxLength(11),Validaciones.soloNumeros]],
      email: ['', [Validators.required, Validators.email]],
      direccion1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9, ]*$/)]],
      direccion2:['']
    });
  }

  obtenerPaisSeleccionado(pais:string)
  {
    this.paisSeleccionado = pais;
  }

  darAlta()
  {
    if(this.formulario.valid && this.paisSeleccionado !== "")
    {
      this.servicioActor.insertar( 
        new Actor
        (
          this.paisSeleccionado,
          this.formulario.get("nombre")?.value,
          this.formulario.get("apellido")?.value,
          this.formulario.get("usuario")?.value,
          this.formulario.get("numero")?.value,
          this.formulario.get("email")?.value,
          this.formulario.get("direccion1")?.value,
          this.formulario.get("direccion2")?.value !== null ? this.formulario.get("direccion2")?.value.toString():undefined
      ));
    }

  }

}
