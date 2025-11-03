import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickmortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'; //URL de la API

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
