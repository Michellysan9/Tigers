import { Component, Input } from '@angular/core';
import { Book } from '../../book';
import { RouterLink, Router } from '@angular/router';
import { books } from '../../lista_de_libros';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  // Recibe la propiedad book que debe ser un objeto de tipo Book
  @Input() book!: Book;

  constructor(private router: Router) { }

  // Esta funcion toma el nombre del libro a modificar y la propiedad a modificar por medio de un objeto que puede contener cualquier propiedad del interface Book
  updateBookProperties(bookName: string, newProperties: Partial<Book>) {
    // Encuentra el libro a partir del nombre
    const book = books.find(b => b.name === bookName);
    // Si el libro existe se asignan las nuevas propiedades por medio de Object.assing
    if (book) {
      Object.assign(book, newProperties);
      // Guardamos la informacion actualizada
      this.saveBooks();
    }
  }

  goToBookPage() {
    // Navega a la pagina del libro
    // this.router.navigate(['/book', this.book.name]);
    const url = this.book.url
    window.open(url, '_blank')
  }

  saveBooks() {
    // Guarda los libros y sus propiedades en el almacenamiento local
    localStorage.setItem('books', JSON.stringify(books));
  }

  loadBooks() {
    // Toma los libros toma los libros y los convierte de JSON a objeto y los asigna
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      Object.assign(books, JSON.parse(storedBooks));
    }
  }

  saveToLibrary() {
    // Evalua si el libros esta guardado o no
    if (this.book.saved) {
      this.book.saved = false
      console.log(`Book saved deleted from library: ${this.book.name}`);
    } else {
      this.book.saved = true
      console.log(`Book saved to library: ${this.book.name}`);
    }

    // Actualizamos el valor de saved (guardado) en el archivo de lista de libros
    const newSavedValue = this.book.saved;
    this.updateBookProperties(this.book.name, { saved: newSavedValue });
    console.log(`Book ${newSavedValue ? 'saved' : 'removed'} to/from library: ${this.book.name}`);
    console.log(books)
  }

  saveToFavorites() {
    // Evalua si el libro esta entre los favoritos o no
    if (this.book.favorite) {
      this.book.favorite = false
      console.log(`Book deleted from favorites: ${this.book.name}`);
    } else {
      this.book.favorite = true
      console.log(`Book added to favorites: ${this.book.name}`);
    }

    // Actualizamos la propiedad de favorito directamente en el archivo de lista de libros
    const newFavoriteValue = this.book.favorite;
    this.updateBookProperties(this.book.name, { favorite: newFavoriteValue })
    console.log(`Book ${newFavoriteValue ? 'saved' : 'removed'} to/from library: ${this.book.name}`);
    console.log(books)
  }

  // Carga la informacion de los libros guardados
  ngOnInit() {
    this.loadBooks();
  }
}
