import { Component, Output, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { books } from './lista_de_libros';
import { Book } from './book';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarServiceService } from './services/sidebar-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-workspace';
  @Output() books: Book[] = books;
}
