import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }

  getFilms(getInfo) {
    return this._http.get(`https://swapi.co/api/films?search=${getInfo}`)
  }

  getPeople(getInfo) {
    return this._http.get(`https://swapi.co/api/people?search=${getInfo}`)
  }

  getStarships(getInfo) {
    return this._http.get(`https://swapi.co/api/starships?search=${getInfo}`)
  }

  getNothing() {
    return this._http.get(`https://swapi.co/api/starships?search=jar`)
  }
}
