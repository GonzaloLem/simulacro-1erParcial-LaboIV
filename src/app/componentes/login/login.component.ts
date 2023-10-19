import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  logueado:boolean = false;
  formulario: FormGroup;
  email:string;
  password:string;

  constructor(private formBuilder:FormBuilder, private router: Router, private servicioUsuario:UsuarioService)
  {
    this.email = "";
    this.password = "";

    this.formulario = this.formBuilder.group
    ({
      password: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });

  }


  login()
  {
    if(this.formulario.valid)
    {
      this.servicioUsuario.obtenerUsuarios().subscribe( (usuarios:any) => {
        console.log(usuarios);
        for(let usuario of usuarios)
        {
          if(usuario.password === this.formulario.get("password")?.value && usuario.email === this.formulario.get("email")?.value)
          {

            this.servicioUsuario.logueado = true;
            new Usuario(this.formulario.get("email")?.value, this.formulario.get("password")?.value, usuario.id).guardarLocalStorage();
            this.router.navigate(['/bienvenido']);
            break;
          }
        }
        this.logueado = true;
      });
    }

  }

  autoLogin()
  {
    this.formulario.get("email")?.setValue("gonzalonl308@gmail.com");
    this.formulario.get("password")?.setValue("gonza123");
  }

}
