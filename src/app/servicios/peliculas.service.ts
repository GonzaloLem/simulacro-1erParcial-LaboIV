import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData,query, getDocs, addDoc, where, doc  } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, list } from '@angular/fire/storage';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService 
{

  constructor(private firestore:Firestore, private storage: Storage) { }

  async insertar(pelicula:Pelicula)
  {

    const coleccion = collection(this.firestore, 'peliculas');
    let peliculass = null;
    let nuevoId: number = 0;

      this.obtenerPeliculas().subscribe(async (peliculas: any) => {
       peliculass = peliculas;
     })
    
    let intervalo = setTimeout( () => {
  
      peliculass!.forEach((doc: any) => {
        const data = doc;
        console.log(data);
        if (data.idPelicula > nuevoId) 
        {
          nuevoId = data.idPelicula;
        }
      });
  
      nuevoId++


      const docRef = addDoc(coleccion, {
        idPelicula:nuevoId,
        nombre:pelicula.Nombre,
        tipo:pelicula.Tipo,
        fechaEstreno:pelicula.FechaEstreno,
        cantidadPublico:pelicula.CantidadPublico,
        foto:"./"+pelicula.Nombre+pelicula.Foto.name.match(/\.(j|p|g|t|b)\w+$/)[0],
        actores:pelicula.Actores
      });

      const imgRef = ref(this.storage, "peliculas/"+pelicula.Nombre+pelicula.Foto.name.match(/\.(j|p|g|t|b)\w+$/)[0]);
      uploadBytes(imgRef, pelicula.Foto).then(response => console.log(response));

      clearInterval(intervalo);
    }, 5000);




  }

  obtenerPeliculas():Observable<any>
  {
    const coleccion = collection(this.firestore, 'peliculas');
    const instantaneaConsulta = getDocs(coleccion);
    const observable = collectionData(coleccion, { idField: 'id'}) as Observable<any>;

    return observable;
  }

  async obtenerImagenesPeliculas():Promise<any>
  {
    let retorno:any[] = [];

    const imagenesRef = ref(this.storage, "peliculas");
    await listAll(imagenesRef).then(async reponse => {
      retorno = [];
      for(let item of reponse.items)
      {
        const url = await getDownloadURL(item);
        retorno.push({nombre:"./"+item.name,url:url});
      }
    });

    return retorno;
  }

}

