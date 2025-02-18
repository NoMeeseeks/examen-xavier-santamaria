import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }
  obtenerRecursos() {
    return this.httpClient.get(`https://images-api.nasa.gov/search?q=galaxy&media_type=image`);
  }
}
