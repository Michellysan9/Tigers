import { Component } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';

@Component({
  selector: 'app-pagina-buscador',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './pagina-buscador.component.html',
  styleUrl: './pagina-buscador.component.css'
})

export class PaginaBuscadorComponent {

}
