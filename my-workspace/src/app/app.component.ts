import { Component, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { books } from './lista_de_libros';
import { Book } from './book';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-workspace';
  @Output() books: Book[] = books;

  isDarkMode: boolean = false;

  onDarkModeToggled(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
