import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-workspace';
}
