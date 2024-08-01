import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../book';
import { books } from '../../lista_de_libros';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AudiolibroComponent } from '../../components/audiolibro/audiolibro.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule, AudiolibroComponent],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent {
  book: Book | undefined;
  pdfSource: string | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookName = params.get('name');
      this.book = books.find(b => b.name === bookName)
      if (this.book) {
        this.pdfSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.book.url) as string;
      }
    })
  }

  volver(){
    this.router.navigate(['/buscador'])
  }

  esconderBotones(){
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((button: Element) => {
      (button as HTMLElement).style.display = 'none';
    });  }

  mostrarPdf(){ document.getElementById('pdf')!.style.display = 'block'; this.esconderBotones() }
  mostrarAudio() {document.getElementById('audio')!.style.display = 'block'; this.esconderBotones() }
}
