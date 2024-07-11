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
  @Input() book!: Book;

  constructor(private router: Router) { }

  updateBookProperties(bookName: string, newProperties: Partial<Book>) {
    const book = books.find(b => b.name === bookName);
    if (book) {
      Object.assign(book, newProperties);
      this.saveBooks();
    }
  }

  goToBookPage() {
    // Navigate to the book page
    this.router.navigate(['/book', this.book.name]);
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      Object.assign(books, JSON.parse(storedBooks));
    }
  }

  saveToLibrary() {
    if (this.book.saved) {
      this.book.saved = false
      console.log(`Book saved deleted from library: ${this.book.name}`);
    } else {
      this.book.saved = true
      console.log(`Book saved to library: ${this.book.name}`);
    }

    const newSavedValue = this.book.saved;
    this.updateBookProperties(this.book.name, { saved: newSavedValue });
    console.log(`Book ${newSavedValue ? 'saved' : 'removed'} to/from library: ${this.book.name}`);
    console.log(books)
  }

  saveToFavorites() {
    // Add the book to favorites (TO DO: implement favorites logic)
    if (this.book.favorite) {
      this.book.favorite = false
      console.log(`Book deleted from favorites: ${this.book.name}`);
    } else {
      this.book.favorite = true
      console.log(`Book added to favorites: ${this.book.name}`);
    }

    const newFavoriteValue = this.book.favorite;
    this.updateBookProperties(this.book.name, { favorite: newFavoriteValue })
    console.log(`Book ${newFavoriteValue ? 'saved' : 'removed'} to/from library: ${this.book.name}`);
    console.log(books)
  }

  ngOnInit() {
    this.loadBooks(); // Load the saved books array
  }
}
