import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API = 'https://restcountries.com/v3.1'
  constructor(private readonly http: HttpClient) { }

  getAllCountrys() {
    return this.http.get<Country[]>(`${this.API}/all`)
  }
}
