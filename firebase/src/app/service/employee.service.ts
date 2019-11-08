import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  $list: Observable<any>;

  constructor(
    private db: AngularFirestore
  ) {
    const types: firebase.firestore.DocumentChangeType[] = ['modified'];
    this.$list = this.db.collection('employee').snapshotChanges().pipe(
      map( actions => {
        return actions.map( item => {
          const entity: any = item.payload.doc.data();
          entity.id = item.payload.doc.id;
          return entity;
        });
      })
    );
  }
}
