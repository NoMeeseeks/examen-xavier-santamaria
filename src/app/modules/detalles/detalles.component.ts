import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecursoService} from '../../services/recurso.service';
import {Links} from '../interfaces/collection';

@Component({
  selector: 'app-detalles',
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  links: Links[]|undefined=undefined;

  constructor(
    private servicio:RecursoService,
  ) {
    this.links = servicio.links;
    console.log(this.links);
  }
}
