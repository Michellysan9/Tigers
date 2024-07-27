import { Component, Input } from '@angular/core';
import { Book } from '../../book';
import { books } from '../../lista_de_libros';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-audiolibro',
  standalone: true,
  imports: [],
  templateUrl: './audiolibro.component.html',
  styleUrl: './audiolibro.component.css'
})
export class AudiolibroComponent {
  @Input() book!: Book;

  constructor(private sanitizer: DomSanitizer) {

  }

  getSafeUrl(url: string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  loadBooks() {
    const storedBooks = localStorage.getItem('books');
    const parsedBooks: Book[] = JSON.parse(storedBooks!);
    books.forEach(book => {
      parsedBooks.find(b => b.name === book.name)!.audioLink = book.audioLink
    })
    localStorage.setItem('books', JSON.stringify(parsedBooks))
  }

  ngOnInit() {
    this.loadBooks()
  }
}
