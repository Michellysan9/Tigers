import { Component, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-audiolibro',
  standalone: true,
  imports: [],
  templateUrl: './audiolibro.component.html',
  styleUrl: './audiolibro.component.css'
})
export class AudiolibroComponent {
  @Input() book!: Book;
}
