import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AlliesSectionComponent } from '../../components/allies-section/allies-section.component';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { OnInit, AfterViewInit } from '@angular/core';
import { books } from '../../lista_de_libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, AlliesSectionComponent, BuscadorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  books = books;
  currentIndex: number = 0;
  carouselInterval: any;

  ngOnInit() {
    this.setupDarkModeToggle();
  }

  ngAfterViewInit() {
    this.startCarousel();
  }

  showNextImage() {
    const carouselImages = document.querySelector(".carousel-images") as HTMLElement;
    const images = document.querySelectorAll(".carousel-images img");
    this.currentIndex = (this.currentIndex + 1) % images.length;
    const offset = -this.currentIndex * (images[0] as HTMLElement).clientWidth;
    carouselImages.style.transform = `translateX(${offset}px)`;
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => this.showNextImage(), 3000);
  }

  setupDarkModeToggle() {
    const toggleButton = document.getElementById("toggleDarkMode");
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = toggleButton.querySelector("i");
        if (icon) {
          if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
          } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
          }
        }
      });
    }
  }
}
