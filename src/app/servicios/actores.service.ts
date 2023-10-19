import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData,query, getDocs, addDoc, where, doc  } from '@angular/fire/firestore';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService 
{

  constructor(private firestore:Firestore) { }

  async insertar(actor:Actor)
  {
    const coleccion = collection(this.firestore, 'actores');
    const docRef = await addDoc(coleccion, {
      pais:actor.Pais,
      nombre:actor.Nombre,
      apellido:actor.Apellido,
      usuario:actor.Usuario,
      numero:actor.Numero,
      email:actor.Email,
      direccion1:actor.Direccion1,
      direccion2:actor.Direccion2
    });

    return docRef;
  }

  obtenerActores():Observable<any>
  {
    const coleccion = collection(this.firestore, 'actores');
    const instantaneaConsulta = getDocs(coleccion);
    const observable = collectionData(coleccion, { idField: 'id'}) as Observable<any>;

    return observable;
  }

}
