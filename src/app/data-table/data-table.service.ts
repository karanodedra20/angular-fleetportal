import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:5000/Users';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }
}
