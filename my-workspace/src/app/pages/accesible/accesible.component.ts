import { Component } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';

@Component({
  selector: 'app-accesible',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './accesible.component.html',
  styleUrl: './accesible.component.css'
})
export class AccesibleComponent {

}
