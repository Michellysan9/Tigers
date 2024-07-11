import { Component, Input, ViewChild } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { books } from '../../lista_de_libros';
import { Book } from '../../book';

@Component({
  selector: 'app-pagina-buscador',
  standalone: true,
  imports: [BuscadorComponent, NavbarComponent, FooterComponent, CommonModule, BookComponent],
  templateUrl: './pagina-buscador.component.html',
  styleUrl: './pagina-buscador.component.css'
})

export class PaginaBuscadorComponent {
  // categorias = ['Hogar y finca', 'Manualidades', 'Cuentos para jovenes y adultos', 'Poemas rimas y canciones', 'Recetas de cocina', 'Cultura', , 'Para pensar y jugar', , 'Salud y enfermedad para niños y adultos', 'Primeros años', 'Literatura']
  categorias = ['Cuentos populares', 'Cuentos infantiles', 'Para pensar y jugar', 'Recetas de cocina', 'Salud para contar', 'Ciencias', 'Hogar y finca', 'Cultura y curiosidades', 'Literatura', 'Manualidades']

  books = books;

  @ViewChild(BuscadorComponent) buscadorComponent!: BuscadorComponent;
  selectedCategory: string = '';
  searchValue: string = '';

  filteredBooks(category: string, searchValue: string): Book[] {
    return this.books.filter(book => {
      const categoryMatch = category === '' || book.category === category;
      const searchMatch = searchValue === '' || book.name.toLowerCase().includes(searchValue.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }
}
