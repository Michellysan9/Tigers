import { Component, Input, Renderer2 } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotonCategoriaComponent } from '../../components/boton-categoria/boton-categoria.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-buscador',
  standalone: true,
  imports: [BuscadorComponent, NavbarComponent, FooterComponent, BotonCategoriaComponent, CommonModule],
  templateUrl: './pagina-buscador.component.html',
  styleUrl: './pagina-buscador.component.css'
})

export class PaginaBuscadorComponent {
  categorias = ['Hogar y finca', 'Manualidades', 'Recetas de cocina', 'Cultura', 'Ciencias Naturales', 'Para pensar y jugar', 'Salud para contar', 'Salud y enfermedad para niños y adultos', 'Primeros años', 'Literatura']
  subLiteratura = ['Cuentos populares', 'Cuentos infantiles', 'Cuentos para jovenes y adultos', 'Poemas rimas y canciones', 'Juegos del lenguaje']
}
