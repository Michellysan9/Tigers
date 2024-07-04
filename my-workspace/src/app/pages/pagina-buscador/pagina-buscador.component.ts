import { Component } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-buscador',
  standalone: true,
  imports: [BuscadorComponent, NavbarComponent, FooterComponent],
  templateUrl: './pagina-buscador.component.html',
  styleUrl: './pagina-buscador.component.css'
})

export class PaginaBuscadorComponent {

}
