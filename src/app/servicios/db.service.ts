import { Injectable, Query } from '@angular/core';
import { Firestore} from '@angular/fire/firestore/firebase';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public angularFirestore: Firestore) { }

  createUser(value, avatar){
    return this.angularFirestore.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }

  borrar() {

  }
  editar() {

  }
  getData() {

  }
}
