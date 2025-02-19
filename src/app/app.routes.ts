import { Routes } from '@angular/router';
import {InicioComponent} from './modules/inicio/inicio.component';
import {CarruselComponent} from './modules/carrusel/carrusel.component';
import {TablaComponent} from './modules/tabla/tabla.component';
import {DetallesComponent} from './modules/detalles/detalles.component';

export const routes: Routes = [
  {
    path: '',
    component:InicioComponent,
    children: [
      {
        path:'carrusel',
        component:CarruselComponent
      },
      {
        path:'tabla',
        component:TablaComponent
      },
      {
        path:'detalles',
        component:DetallesComponent
      }
    ]
  }
];
