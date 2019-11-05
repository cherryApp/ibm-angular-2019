import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  $list: BehaviorSubject<T[]> = new BehaviorSubject([]);
  apiUrl = 'http://localhost:3000';
  entity = '';

  constructor(
    protected http: HttpClient
  ) {
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.entity}`).pipe(
      tap( data => this.$list.next(data) )
    );
  }

  get(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entity}/${id}`);
  }

  update(data: any): Observable<T> {
    return this.http.put<T>(
      `${this.apiUrl}/${this.entity}/${data.id}`,
      data
    );
  }

  delete(data: any): void {
    this.http.delete(`${this.apiUrl}/${this.entity}/${data.id}`).forEach(
      response => this.getAll().toPromise().then()
    );
  }
}
