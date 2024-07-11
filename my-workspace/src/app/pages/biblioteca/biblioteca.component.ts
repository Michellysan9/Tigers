import { Component } from '@angular/core';
import { FavoritosComponent } from '../favoritos/favoritos.component';
import { VerMasTardeComponent } from '../ver-mas-tarde/ver-mas-tarde.component';
import { books } from '../../lista_de_libros';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [FavoritosComponent, VerMasTardeComponent, NavbarComponent, FooterComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  books = books;
}
