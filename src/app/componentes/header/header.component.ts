import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  constructor(private router:Router){}

  deslogin()
  {
    Usuario.eliminarLocalStorage();
    this.router.navigate(["/login"]);
  }
}
