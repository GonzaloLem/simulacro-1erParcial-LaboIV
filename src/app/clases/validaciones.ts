import { AbstractControl } from '@angular/forms';

export class Validaciones 
{
    static soloLetras(control: AbstractControl) 
    {
        let retorno:any = null;

            if (!/^[a-zA-ZñÑ]+$/.test(<string>control.value)) 
            {
                retorno = { soloLetras: true };
            }
    
        return retorno;
      }
    
      static soloNumeros(control: AbstractControl) 
      {
        let retorno:any = null;

            if (!/^[0-9]+$/.test(control.value)) 
            {
                retorno = { soloNumeros: true };
            }
    
        return retorno;
      }
}
