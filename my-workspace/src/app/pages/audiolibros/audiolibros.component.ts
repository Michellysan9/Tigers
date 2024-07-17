import { Component } from '@angular/core';
import { books } from '../../lista_de_libros';
import { AudiolibroComponent } from '../../components/audiolibro/audiolibro.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../book';

@Component({
  selector: 'app-audiolibros',
  standalone: true,
  imports: [AudiolibroComponent, CommonModule],
  templateUrl: './audiolibros.component.html',
  styleUrl: './audiolibros.component.css'
})

export class AudiolibrosComponent {
  books: Book[] = books;
}
