import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  usuario:boolean;
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private router: Router, private servicioUsuario:UsuarioService)
  {
    this.usuario = false;


    this.formulario = this.formBuilder.group
    ({
      password: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });

  }


  register()
  {
    if(this.formulario.valid)
    {
      this.servicioUsuario.obtenerUsuarios().subscribe( (usuarios:any) => {
        console.log(usuarios);
        for(let usuario of usuarios)
        {
          if(usuario.email === this.formulario.get("email")?.value)
          {
            this.usuario = true;
            break;
          }
        }

        if(!this.usuario)
        {
          let user = new Usuario(this.formulario.get("email")?.value, this.formulario.get("password")?.value);
          this.servicioUsuario.insertar(user);
          user.guardarLocalStorage();
          this.router.navigate(['/bienvenido']);
        }

      });


    }

  }

  autoRegister()
  {
    this.formulario.get("email")?.setValue("gonzalonl308@gmail.com");
    this.formulario.get("password")?.setValue("gonza123");
  }
}
