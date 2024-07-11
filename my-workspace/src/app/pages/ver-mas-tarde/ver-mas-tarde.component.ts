import { Component, Input } from '@angular/core';
import { Book } from '../../book';
import { BookComponent } from '../../components/book/book.component';
import { CommonModule } from '@angular/common';
import { books } from '../../lista_de_libros';

@Component({
  selector: 'app-ver-mas-tarde',
  standalone: true,
  imports: [BookComponent, CommonModule],
  templateUrl: './ver-mas-tarde.component.html',
  styleUrl: './ver-mas-tarde.component.css'
})
export class VerMasTardeComponent {
  savedBooks = books.filter(book => book.saved)
}
