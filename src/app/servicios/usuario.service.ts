import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData,query, getDocs, addDoc, where, doc  } from '@angular/fire/firestore';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  logueado:boolean;
  constructor(private firestore:Firestore) {
    this.logueado = false;
   }

  async insertar(usuario:Usuario)
  {
    const coleccion = collection(this.firestore, 'usuarios');
    const docRef = await addDoc(coleccion, {
      email:usuario.Email,
      password:usuario.Password
    });

    return docRef;
  }

  obtenerUsuarios():Observable<any>
  {
    const coleccion = collection(this.firestore, 'usuarios');
    const instantaneaConsulta = getDocs(coleccion);
    const observable = collectionData(coleccion, { idField: 'id'}) as Observable<any>;

    return observable;
  }

}
