import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaBuscadorComponent } from './pages/pagina-buscador/pagina-buscador.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaBuscadorComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-workspace';
}
