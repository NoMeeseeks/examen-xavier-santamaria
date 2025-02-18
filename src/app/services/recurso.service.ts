import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Links} from '../modules/interfaces/collection';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  links:Links[] | undefined = undefined;

  constructor(
    private httpClient: HttpClient,
  ) {

  }
  obtenerRecursos() {
    return this.httpClient.get(`https://images-api.nasa.gov/search?q=galaxy&media_type=image`);
  }
}
