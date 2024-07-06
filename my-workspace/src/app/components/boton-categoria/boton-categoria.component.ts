import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-categoria',
  standalone: true,
  imports: [],
  template: `<button (click)="navigateToCategory()">{{ category }}</button>`,
  styleUrl: './boton-categoria.component.css'
})

export class BotonCategoriaComponent {
  @Input() category:string = '';

  navigateToCategory() {
    // this.router.navigate(['/categories', this.category.id]);
  }
}
