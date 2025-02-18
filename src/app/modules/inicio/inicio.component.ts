import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-inicio',
  imports: [
    RouterOutlet,
    MenuComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
