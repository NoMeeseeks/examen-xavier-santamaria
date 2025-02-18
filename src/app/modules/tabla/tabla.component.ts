import {Component} from '@angular/core';
import {RecursoService} from '../../services/recurso.service';
import {Collection, Items, Links} from '../interfaces/collection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  // @ts-ignore
  items:Items[];

  constructor(
    private service: RecursoService,
    private router: Router,
  ) {
    this.service.obtenerRecursos().subscribe(params => {
      // @ts-ignore
      this.items = params['collection']['items'] as Items[];
    })

  }

  enviarDatos(imagenes:Links[]){
    this.service.links = imagenes;
    this.router.navigate(['detalles']);
  }
}
