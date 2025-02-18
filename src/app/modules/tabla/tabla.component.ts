import { Component } from '@angular/core';
import {RecursoService} from '../../services/recurso.service';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {



  constructor(
    private service:RecursoService,
  ) {
    this.service.obtenerRecursos().subscribe(params=>{
      //@ts-ignore
      console.log(params['items']);
    })

  }
}
