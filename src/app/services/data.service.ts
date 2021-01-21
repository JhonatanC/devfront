import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost/dev_back/public/api/data';

  constructor( private _http: HttpClient ) { }

  // Obtener usuarios
  get_data(){
    return this._http.get(`${this.url}`);
  }
}
