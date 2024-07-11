import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, output, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})

export class BuscadorComponent {
  @Input() categorias: Array<string> = [];

  @ViewChild('categorySelect') categorySelect!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  selectedCategory: string = '';
  searchValue: string = '';

  @Output() categorySelected = new EventEmitter<string>();
  @Output() searchValueChanged = new EventEmitter<string>();

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    console.log(this.selectedCategory)
    this.categorySelected.emit(category)
  }

  onSearchChange(searchValue: string) {
    this.searchValue = searchValue;
    console.log(this.searchValue)
    this.searchValueChanged.emit(searchValue)
  }
}
