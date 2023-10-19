import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{

  constructor(private router: Router){}

  ngOnInit(): void 
  {

    if(!Usuario.obtenerLocalStorage())
    {
      this.router.navigate(['/login']);
    }
  }
 
    
}
