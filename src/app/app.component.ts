<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './clases/usuario';
=======
import { Component, EventEmitter, Output } from '@angular/core';
>>>>>>> 08581867c4d5f5f46f50328c704fa1d7c745df4d

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
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
 
    
=======
export class AppComponent {
  title = 'simulacro-primerParcial';



>>>>>>> 08581867c4d5f5f46f50328c704fa1d7c745df4d
}
