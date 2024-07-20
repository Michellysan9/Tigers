import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../book';
import { books } from '../../lista_de_libros';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  book: Book | undefined;
  pdfSource: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookName = params.get('name');
      this.book = books.find(b => b.name === bookName)
      if (this.book) {
        this.pdfSource = this.book.url
      }
    })
  }
}
