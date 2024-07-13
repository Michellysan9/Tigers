import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Book } from '../../book';
import { BookComponent } from '../book/book.component';
import { CommonModule } from '@angular/common';
import { books } from '../../lista_de_libros';
@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [BookComponent, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  favoriteBooks: Book[] = books.filter(book => book.favorite);
}
